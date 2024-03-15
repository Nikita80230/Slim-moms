import { FormattedDay } from "@/types/Dairy";
import { GetUserInfoDayResponse } from "@/types/ResponseTypes";

export const mapGetUserInfoData = (data: GetUserInfoDayResponse[]) => {
  const formattedData: FormattedDay[] = data.map(
    (day: GetUserInfoDayResponse) => {
      return {
        id: day._id,
        eatenProducts: day.eatenProducts,
        date: day.date,
        daySummary: day.daySummary,
      };
    }
  );
  return formattedData;
};
