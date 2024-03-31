import { useEffect } from "react";
import { toast } from "react-toastify";

import {
  selectDailyRate,
  selectDate,
  selectDays,
} from "@/redux/user/userSlice";

import { useAppSelector } from "@/hooks/hooks";

import { compareDates } from "@/utils/compareDates";

import { StyledSummaryTable } from "./Styled";

import { DaySummary } from "@/types/Diary";

const initialDaySummary = {
  date: "",
  kcalLeft: 0,
  kcalConsumed: 0,
  dailyRate: 0,
  percentsOfDailyRate: 0,
  userId: "",
  _id: "",
};

const SummaryTable = () => {
  const days = useAppSelector(selectDays);
  const date = useAppSelector(selectDate);
  const dailyRate = useAppSelector(selectDailyRate);

  const isDateInDays = days.some((day) => compareDates(day.date, date));

  const currentDaySummary: DaySummary = isDateInDays
    ? days.find((day) => compareDates(day.date, date))!.daySummary
    : initialDaySummary;

  useEffect(() => {
    if (!isDateInDays) toast.info("You haven`t added any food for this day");
  }, [isDateInDays]);

  console.log(dailyRate);

  return (
    <StyledSummaryTable>
      <h3 className="summaryTitle">Summary for {date.slice(0, 10)}</h3>
      <div className="table">
        <div className="propertyCol">
          <div className="property">Left</div>
          <div className="property">Consumed</div>
          <div className="property">Daily rate</div>
          <div className="property">n% of normal</div>
        </div>
        <div className="valueCol">
          <div className="value">
            {currentDaySummary.kcalLeft.toFixed()} kcal
          </div>
          <div className="value">
            {Number(currentDaySummary.kcalConsumed.toFixed()) < 0
              ? 0
              : currentDaySummary.kcalConsumed.toFixed()}{" "}
            kcal
          </div>
          <div className="value">{dailyRate?.toFixed() ?? 0} kcal</div>
          <div className="value">
            {Number(currentDaySummary.percentsOfDailyRate.toFixed()) < 0
              ? 0
              : currentDaySummary.percentsOfDailyRate.toFixed()}{" "}
            %
          </div>
        </div>
      </div>
    </StyledSummaryTable>
  );
};

export default SummaryTable;
