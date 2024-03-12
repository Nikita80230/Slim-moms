import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getUserDailyRate, login, refresh } from "./operations";
import { RootState } from "../store";

import { DaySummary, LoggedInUserDailyRate } from "@/types/Dairy";
import {
  // GetUserInfoResponse,
  UserLoginResponse,
  UserTodaySummary,
} from "@/types/User";
// import { registration } from "./operations";

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
  days: Day[] | [];
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
            user: UserLoginResponse;
            accessToken: string;
            refreshToken: string;
            sid: string;
            todaySummary: DaySummary;
          }>
        ) => {
          state.isLoading = false;
          state.isLoggedIn = true;
          state.user = action.payload.user;
          state.accessToken = action.payload.accessToken;
          state.refreshToken = action.payload.refreshToken;
          state.sid = action.payload.sid;
          state.daySummary = action.payload.todaySummary;
        }
      )
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
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
            sid: string;
            userData: UserLoginResponse;
            days: Day[];
          }>
        ) => {
          state.isRefreshing = false;
          state.isLoading = false;
          state.isLoggedIn = true;
          state.refreshToken = action.payload.newRefreshToken;
          state.sid = action.payload.sid;
          // if (state.user !== null) {
          state.user = action.payload.userData;
          state.days = action.payload.days;
          // }
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
      });
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectDate = (state: RootState) => state.auth.date;

export const { setDairyDate } = authSlice.actions;
export const authReducer = authSlice.reducer;