import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import { UserAuthFormData } from "@/types/User";

export const instance = axios.create({
  baseURL: "https://slimmom-backend.goit.global/",
});

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
  "auth/registration",
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
