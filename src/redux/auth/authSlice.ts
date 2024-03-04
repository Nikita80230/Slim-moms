import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { login, refresh } from "./operations";

import {
  GetUserInfoResponse,
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
  todaySummary: UserTodaySummary | null | object;
  user: UserLoginResponse | null;
};

const initialAuthState: InitialAuthState = {
  isLoading: false,
  isLoggedIn: false,

  accessToken: null,
  refreshToken: null,
  sid: null,
  todaySummary: null,
  user: null,
};

// {
//     email: "",
//     username: "",
//     id: "",
//     userData: {
//       weight: 0,
//       height: 0,
//       age: 0,
//       bloodType: 0,
//       desiredWeight: 0,
//       dailyRate: 0,
//       notAllowedProducts: [],
//     },
//   },

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
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
            newSid: string;
            userData: UserLoginResponse;
          }>
        ) => {
          state.isLoading = false;
          state.refreshToken = action.payload.newRefreshToken;
          state.sid = action.payload.newSid;
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

export const authReducer = authSlice.reducer;
