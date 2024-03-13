import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import { mapData } from "@/utils/mapData";

import { RootState } from "../store";

import {
  CalculateCaloriesFormData,
  LoggedInUserDailyRate,
  Product,
} from "@/types/Dairy";
import {
  AddFirstProductResponse,
  AddProductResponse,
  // GetUserInfoDayResponse,
} from "@/types/ResponseTypes";
import {
  GetUserInfoResponse,
  UserAuthFormData,
  UserLoginResponse,
} from "@/types/User";

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
      // console.log("response ", response.data);
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
      const { data } = await instance.post("/auth/login", loginFormData);
      toast.success("You was successfully logged in, please login!!!");
      const { refreshToken, accessToken, sid } = data;
      setToken(accessToken);

      const {
        data: { email, userData: user, username, id, days },
      } = await instance.get<GetUserInfoResponse>("/user");

      const userData: UserLoginResponse = {
        email,
        username,
        id,
        userData: user,
      };

      return { userData, sid, refreshToken, days: mapData(days) };
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
    const oldSid = state.auth.sid;
    const refreshToken = state.auth.refreshToken as string;

    setToken(refreshToken);

    try {
      const response = await instance.post<RefreshResponse>("/auth/refresh", {
        sid: oldSid,
      });

      const { newRefreshToken, newAccessToken, sid } = response.data;
      setToken(newAccessToken);

      const {
        data: { email, userData: user, username, id, days },
      } = await instance.get<GetUserInfoResponse>("/user");

      const userData: UserLoginResponse = {
        email,
        username,
        id,
        userData: user,
      };

      // console.log(days);
      return {
        userData,
        sid,
        newRefreshToken,
        days: mapData(days),
      };
    } catch (error) {
      toast.error("Uppss something went wrong, re-log in fault");
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as RootState;
      const isRefreshing = state.auth.isRefreshing;
      const sid = state.auth.sid;

      if (!sid || isRefreshing) return false;
      return true;
    },
  }
);

export const getNotAllowProductList = createAsyncThunk(
  "auth/getNotAllowProductList",
  async (
    userCalculateCaloriesFormData: CalculateCaloriesFormData,
    thunkApi
  ) => {
    try {
      const response = await instance.post(
        "/daily-rate",
        userCalculateCaloriesFormData
      );

      console.log("getNotAllowProductList-->", response.data);
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const getUserDailyRate = createAsyncThunk(
  "auth/getNotAllowProductList",
  async (
    userCalculateCaloriesFormData: CalculateCaloriesFormData,
    { getState, rejectWithValue }
  ) => {
    const state = getState() as RootState;
    const userId = state.auth.user?.id;
    try {
      const { data } = await instance.post<LoggedInUserDailyRate>(
        `/daily-rate/${userId}`,
        userCalculateCaloriesFormData
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProductListByQuery = createAsyncThunk(
  "auth/getProductListByQuery",
  async (searchQuery: string, thunkApi) => {
    try {
      const { data } = await instance.get<Product[]>(
        `/product?search=${searchQuery}`
      );
      console.log(data);
      return data;
    } catch (error) {
      toast.error("Please, count your daily rate first");
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  "auth/addProduct",
  async (
    formData: {
      date: string;
      productId: string;
      weight: number;
    },
    thunkApi
  ) => {
    try {
      const { data } = await instance.post<
        AddProductResponse | AddFirstProductResponse
      >("/day", formData);
      // console.log("auth/addProduct-->", data);
      return data;
    } catch (error) {
      toast.error("Upss, smth go wrong, product wasn't added");
      return thunkApi.rejectWithValue(error);
    }
  }
);
