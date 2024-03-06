import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { login, refresh } from "./operations";
import { RootState } from "../store";

import { DaySummary } from "@/types/Dairy";
import {
  // GetUserInfoResponse,
  UserLoginResponse,
  UserTodaySummary,
} from "@/types/User";
// import { registration } from "./operations";

type InitialAuthState = {
  isLoading: boolean;
  isLoggedIn: boolean;
  accessToken: null | string;
  refreshToken: null | string;
  sid: null | string;
  date: Date;
  todaySummary: DaySummary | null | object;
  user: UserLoginResponse | null;
};

const initialAuthState: InitialAuthState = {
  isLoading: false,
  isLoggedIn: false,

  accessToken: null,
  refreshToken: null,
  sid: null,
  date: new Date(),
  todaySummary: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setDairyDate: (state, action: PayloadAction<Date>) => {
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
            todaySummary: UserTodaySummary | object;
          }>
        ) => {
          state.isLoading = false;
          state.isLoggedIn = true;
          state.user = action.payload.user;
          state.accessToken = action.payload.accessToken;
          state.refreshToken = action.payload.refreshToken;
          state.sid = action.payload.sid;
          state.todaySummary = action.payload.todaySummary;
        }
      )
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(refresh.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        refresh.fulfilled,
        (
          state,
          action: PayloadAction<{
            newRefreshToken: string;
            sid: string;
            userData: UserLoginResponse;
          }>
        ) => {
          state.isLoading = false;
          state.isLoggedIn = true;
          state.refreshToken = action.payload.newRefreshToken;
          state.sid = action.payload.sid;
          // if (state.user !== null) {
          state.user = action.payload.userData;
          // }
        }
      )
      .addCase(refresh.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectDate = (state: RootState) => state.auth.date;

export const { setDairyDate } = authSlice.actions;
export const authReducer = authSlice.reducer;
