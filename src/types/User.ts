import { DaySummary, EatenProduct } from "./Dairy";

export type UserDairyData = {
  weight: number;
  height: number;
  age: number;
  bloodType: number;
  desiredWeight: number;
  dailyRate: number;
  notAllowedProducts: string[];
};

export type UserAuthFormData = {
  email: string;
  password: string;
  username?: string;
};

export type UserLoginResponse = {
  email: string;
  username: string;
  id: string;
  userData: UserDairyData;
};

export type UserTodaySummary = {
  date: string;
  kcalLeft: number;
  kcalConsumed: number;
  dailyRate: number;
  percentsOfDailyRate: number;
  userId: string;
  id: string;
};

export type GetUserInfoResponse = UserLoginResponse & { days: Day[] };
