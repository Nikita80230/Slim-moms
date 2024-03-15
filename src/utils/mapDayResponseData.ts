import { isFirstProductResponse } from "./productTypeGuard";

import { FormattedDay } from "@/types/Dairy";
import {
  AddFirstProductResponse,
  AddProductResponse,
} from "@/types/ResponseTypes";

export const mapDayResponseData = (
  data: AddProductResponse | AddFirstProductResponse
) => {
  if (isFirstProductResponse(data)) {
    const formattedData: FormattedDay = {
      id: data.newDay.id,
      eatenProducts: data.newDay.eatenProducts,
      date: data.newDay.date,
      daySummary: data.newSummary,
    };
    return formattedData;
  } else {
    const formattedData: FormattedDay = {
      id: data.day.id,
      eatenProducts: data.day.eatenProducts,
      date: data.day.date,
      daySummary: data.daySummary,
    };
    return formattedData;
  }
};
