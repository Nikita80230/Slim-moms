import { forwardRef } from "react";
import DatePicker from "react-datepicker";

import { selectDate, setDairyDate } from "@/redux/user/userSlice";

import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

import datePickerImg from "@/assets/images/datePickerImg.png";

import { StyledDataPickerComponent } from "./Styled";

import "react-datepicker/dist/react-datepicker.css";

const DataPickerComponent = () => {
  const dispatch = useAppDispatch();

  const date = useAppSelector(selectDate);

  const ExampleCustomInput = forwardRef<
    HTMLButtonElement,
    { value?: string; onClick?: any }
  >(({ value, onClick }, ref) => (
    <button className="customDateInput" onClick={onClick} ref={ref}>
      {value?.replaceAll("/", ".")}
      <img className="dateImg" src={datePickerImg} alt="date" />
    </button>
  ));

  return (
    <StyledDataPickerComponent>
      <DatePicker
        className="newProductDate"
        selected={date}
        onChange={(date) => {
          if (!date) return;
          dispatch(setDairyDate(date));
        }}
        required
        customInput={<ExampleCustomInput />}
      />
    </StyledDataPickerComponent>
  );
};

export default DataPickerComponent;
