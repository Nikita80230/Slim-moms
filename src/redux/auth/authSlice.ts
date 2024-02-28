import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { login } from "./operations";

import { UserResponse } from "@/types/UserTypes";
// import { registration } from "./operations";

type InitialAuthState = {
  isLoading: boolean;
  isRegister: boolean;
  isLoggedIn: boolean;
  accessToken: null | string;
  refreshToken: null | string;
  sid: null | string;
  todaySummary: any;
  user: UserResponse;
};

const initialAuthState: InitialAuthState = {
  isLoading: false,
  isRegister: false,
  isLoggedIn: false,

  accessToken: null,
  refreshToken: null,
  sid: null,
  todaySummary: {},
  user: {
    email: null,
    username: null,
    userData: {
      notAllowedProducts: null,
      weight: null,
      height: null,
      age: null,
      bloodType: null,
      desiredWeight: null,
      dailyRate: null,
    },
    id: null,
  },
};

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
            user: UserResponse;
            accessToken: string;
            refreshToken: string;
            sid: string;
            todaySummary: any;
          }>
        ) => {
          state.isLoading = false;
          state.isRegister = true;
          state.user = action.payload.user;
          state.accessToken = action.payload.accessToken;
          state.refreshToken = action.payload.refreshToken;
          state.sid = action.payload.sid;
          state.todaySummary = action.payload.todaySummary;
        }
      )
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isRegister = false;
      });
  },
});

export const authReducer = authSlice.reducer;
