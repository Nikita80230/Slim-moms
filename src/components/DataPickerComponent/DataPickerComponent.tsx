import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";

import datePickerImg from "@/assets/images/datePickerImg.png";

import { StyledDataPickerComponent } from "./Styled";

import "react-datepicker/dist/react-datepicker.css";

const DataPickerComponent = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
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
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        required
        customInput={<ExampleCustomInput />}
      />
    </StyledDataPickerComponent>
  );
};

export default DataPickerComponent;
