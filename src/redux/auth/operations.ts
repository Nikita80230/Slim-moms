import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import { RootState } from "../store";

import {
  GetUserInfoResponse,
  UserAuthFormData,
  UserLoginResponse,
} from "@/types/User";
import { CalculateCaloriesFormDataResponse } from "@/types/Dairy";

type RefreshResponse = {
  newAccessToken: string;
  newRefreshToken: string;
  sid: string;
};

export const instance = axios.create({
  baseURL: "https://slimmom-backend.goit.global/",
});

const setToken = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registration = createAsyncThunk(
  "auth/registration",
  async (registerFormData: UserAuthFormData, thunkApi) => {
    try {
      const response = await instance.post("/auth/register", registerFormData);
      toast.success("You was successfully registered, please login!!!");
      console.log("response ", response.data);
      return response.data;
    } catch (error: any) {
      toast.error("Upsss, some error occurred, please try again later");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (loginFormData: UserAuthFormData, thunkApi) => {
    try {
      const response = await instance.post("/auth/login", loginFormData);
      toast.success("You was successfully logged in, please login!!!");
      console.log("login ", response.data);

      return response.data;
    } catch (error: any) {
      toast.error("Upsss, some error occurred, please try again later");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const sid = state.auth.sid;
    const refreshToken = state.auth.refreshToken as string;

    setToken(refreshToken);

    try {
      const response = await instance.post<RefreshResponse>("/auth/refresh", {
        sid,
      });

      const newSid = response.data.sid; // ця змінна створена через те що з бекенду sid приходить з точно такою ж назвою
      const { newRefreshToken, newAccessToken } = response.data;
      setToken(newAccessToken);

      const userDataResponse = await instance.get<GetUserInfoResponse>("/user");

      const userData: UserLoginResponse = {
        email: userDataResponse.data.email,
        username: userDataResponse.data.username,
        id: userDataResponse.data.id,
        userData: userDataResponse.data.userData,
      };

      return { userData, newSid, newRefreshToken };
    } catch (error) {
      toast.error("Uppss something went wrong, re-log in fault");
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as RootState;
      const sid = state.auth.sid;

      if (!sid) return false;
      return true;
    },
  }
);

export const getNotAllowProductList = createAsyncThunk(
  "dairy/getNotAllowProductList",
  async (
    userCalculateCaloriesFormData: CalculateCaloriesFormDataResponse,
    thunkApi
  ) => {
    try {
      const response = await instance.post(
        "/daily-rate",
        userCalculateCaloriesFormData
      );

      console.log(response.data);
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
