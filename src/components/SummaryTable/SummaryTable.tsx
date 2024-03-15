import { useEffect, useState } from "react";

import { selectDate, selectDays } from "@/redux/user/userSlice";

import { useAppSelector } from "@/hooks/hooks";

import { StyledSummaryTable } from "./Styled";

import { DaySummary } from "@/types/Dairy";

const SummaryTable = () => {
  const days = useAppSelector(selectDays);
  const date = useAppSelector(selectDate);

  const [currentDaySummary, setCurrentDaySummary] = useState<DaySummary>({
    date: "",
    kcalLeft: 0,
    kcalConsumed: 0,
    dailyRate: 0,
    percentsOfDailyRate: 0,
    userId: "",
    _id: "",
  });

  useEffect(() => {
    for (const day of days) {
      if (date.slice(0, 10) === day.date) {
        console.log("in useEffect", date.slice(0, 10));
        setCurrentDaySummary(day.daySummary);
      } else {
        setCurrentDaySummary({
          date: "",
          kcalLeft: 0,
          kcalConsumed: 0,
          dailyRate: 0,
          percentsOfDailyRate: 0,
          userId: "",
          _id: "",
        });
      }
    }
  }, [date, days]);

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
            {currentDaySummary.kcalConsumed.toFixed()} kcal
          </div>
          <div className="value">
            {currentDaySummary.dailyRate.toFixed()} kcal
          </div>
          <div className="value">
            {currentDaySummary.percentsOfDailyRate.toFixed()} %
          </div>
        </div>
      </div>
    </StyledSummaryTable>
  );
};

export default SummaryTable;
