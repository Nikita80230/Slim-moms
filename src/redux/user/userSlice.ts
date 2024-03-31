import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  addProduct,
  deleteProduct,
  getUserDailyRate,
  login,
  logOut,
  refresh,
} from "./operations";
import { RootState } from "../store";

import { DaySummary, FormattedDay, LoggedInUserDailyRate } from "@/types/Diary";
import { UserLoginResponse } from "@/types/User";

type InitialAuthState = {
  isLoading: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  accessToken: null | string;
  refreshToken: null | string;
  sid: null | string;
  date: string;
  daySummary: DaySummary | null;
  user: UserLoginResponse | null;
  days: FormattedDay[];
};

const initialAuthState: InitialAuthState = {
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  accessToken: null,
  refreshToken: null,
  sid: null,
  date: new Date().toISOString(),
  daySummary: null,
  user: null,
  days: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setDairyDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        login.fulfilled,
        (
          state,
          action: PayloadAction<{
            refreshToken: string;
            sid: string;
            accessToken: string;
            userData: UserLoginResponse;
            days: FormattedDay[];
          }>
        ) => {
          state.isRefreshing = false;
          state.isLoading = false;
          state.isLoggedIn = true;
          state.refreshToken = action.payload.refreshToken;
          state.sid = action.payload.sid;
          state.accessToken = action.payload.accessToken;
          state.user = action.payload.userData;
          state.days = action.payload.days;
        }
      )
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(logOut.fulfilled, () => {
        return initialAuthState;
      })
      .addCase(logOut.rejected, (state) => {
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(refresh.pending, (state) => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(
        refresh.fulfilled,
        (
          state,
          action: PayloadAction<{
            newRefreshToken: string;
            newAccessToken: string;
            sid: string;
            userData: UserLoginResponse;
            days: FormattedDay[];
          }>
        ) => {
          state.isRefreshing = false;
          state.isLoading = false;
          state.isLoggedIn = true;
          state.refreshToken = action.payload.newRefreshToken;
          state.sid = action.payload.sid;
          state.accessToken = action.payload.newAccessToken;
          state.user = action.payload.userData;
          state.days = action.payload.days;
        }
      )
      .addCase(refresh.rejected, (state) => {
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(getUserDailyRate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getUserDailyRate.fulfilled,
        (state, action: PayloadAction<LoggedInUserDailyRate>) => {
          state.isLoading = false;
          state.daySummary = action.payload.summary;
          if (state.user !== null) {
            state.user.userData.dailyRate = action.payload.dailyRate;
            state.user.userData.notAllowedProducts =
              action.payload.notAllowedProducts;
          }
        }
      )
      .addCase(getUserDailyRate.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        addProduct.fulfilled,
        (state, action: PayloadAction<FormattedDay>) => {
          state.isLoading = false;
          const isPayloadDayInDays = state.days.some(
            (day) => day.date === action.payload.date
          );

          if (isPayloadDayInDays) {
            state.days = state.days.map((day) => {
              if (day.id === action.payload.id) {
                return action.payload;
              }
              return day;
            });
          } else {
            state.days.push(action.payload);
          }
        }
      )
      .addCase(addProduct.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        deleteProduct.fulfilled,
        (
          state,
          action: PayloadAction<{
            newDaySummary: DaySummary;
            eatenProductId: string;
          }>
        ) => {
          state.isLoading = false;

          state.days.map((day) => {
            if (day.date === action.payload.newDaySummary.date) {
              day.daySummary = action.payload.newDaySummary;
              day.eatenProducts = day.eatenProducts.filter(
                (product) => product.id !== action.payload.eatenProductId
              );
            }
          });
        }
      )
      .addCase(deleteProduct.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectDate = (state: RootState) => state.auth.date;
export const selectDays = (state: RootState) => state.auth.days;
export const selectNotAllowedProducts = (state: RootState) =>
  state.auth.user?.userData.notAllowedProducts;
export const selectDailyRate = (state: RootState) =>
  state.auth.user?.userData.dailyRate;

export const { setDairyDate } = authSlice.actions;
export const authReducer = authSlice.reducer;
