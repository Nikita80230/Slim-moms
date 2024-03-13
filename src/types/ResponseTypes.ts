import { DaySummary, EatenProduct } from "./Dairy";

export type DayResponse = {
  id: string;
  eatenProducts: EatenProduct[];
  date: string;
  daySummary: string;
};

export type AddProductResponse = {
  eatenProduct: EatenProduct;
  day: DayResponse;
  daySummary: DaySummary;
};

export type AddFirstProductResponse = {
  eatenProduct: EatenProduct;
  newDay: DayResponse;
  newSummary: DaySummary;
};

export type GetUserInfoDayResponse = {
  //for get user info response before formatting
  _id: string;
  eatenProducts: EatenProduct[];
  date: string;
  __v: number;
  daySummary: DaySummary;
};
