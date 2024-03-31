import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import { deleteProductDataMapper } from "@/utils/deleteProductDataMapper";
import { mapDayResponseData } from "@/utils/mapDayResponseData";
import { mapGetUserInfoData } from "@/utils/mapGetUserInfoData";

import { RootState } from "../store";

import {
  CalculateCaloriesFormData,
  LoggedInUserDailyRate,
  NotAllowProductList,
  Product,
} from "@/types/Diary";
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

const setToken = (token: string | null) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registration = createAsyncThunk(
  "auth/registration",
  async (registerFormData: UserAuthFormData, thunkApi) => {
    try {
      const response = await instance.post("/auth/register", registerFormData);
      toast.success("You was successfully registered, please login!!!");
      console.log("response registration", response.data);
      return response.data;
    } catch (error: any) {
      console.log(error);
      toast.error(`${error.response.data.message}`);
      return thunkApi.rejectWithValue(error.response.data.message);
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

      return {
        userData,
        sid,
        refreshToken,
        accessToken,
        days: mapGetUserInfoData(days),
      };
    } catch (error: any) {
      toast.error("Upsss, some error occurred, please try again later");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const response = await instance.post("/auth/logout");
    setToken(null);
    return response;
  } catch (error) {
    toast.success("You was successfully logged out!!!");
    return thunkApi.rejectWithValue(error);
  }
});

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
        newAccessToken,
        days: mapGetUserInfoData(days),
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
      const { data } = await instance.post<NotAllowProductList>(
        "/daily-rate",
        userCalculateCaloriesFormData
      );

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
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
      toast.success("Your parameters have been added");
      return data;
    } catch (error) {
      toast.error("Upsss, Invalid form data check field's values");
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
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
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
      return mapDayResponseData(data);
    } catch (error) {
      toast.error("Upss, smth go wrong, product wasn't added");
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "auth/deleteProduct",
  async (
    ids: { dayId: string; eatenProductId: string },
    { getState, rejectWithValue }
  ) => {
    const state = getState() as RootState;
    const accessToken = state.auth.accessToken;

    try {
      const response = await fetch("https://slimmom-backend.goit.global/day", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(ids), // body data type must match "Content-Type" header
      });
      // console.log("auth/addProduct-->", data);
      // return mapDayResponseData(data);
      const { newDaySummary } = await response.json();
      console.log(
        "deleteProductDataMapper(newDaySummary)",
        deleteProductDataMapper(newDaySummary)
      );
      return {
        newDaySummary: deleteProductDataMapper(newDaySummary),
        eatenProductId: ids.eatenProductId,
      };
    } catch (error) {
      toast.error("Upss, smth go wrong, product wasn't deleted");
      return rejectWithValue(error);
    }
  }
);
