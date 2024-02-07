import { InputGroup } from "..";
import { StyledRadioButton } from "./Styled";

const RadioButtons = () => {
  return (
    <StyledRadioButton>
      <InputGroup
        name="bloodTypes"
        // value="bloodType1"
        type="radio"
        labelText="1"
        className="radio"
      />
      <label>
        <input type="radio" name="bloodTypes" value="bloodType1" />
        <span className="radioWrapperSpan">1</span>
      </label>
      <label>
        <input type="radio" name="bloodTypes" value="bloodType2" />
        <span className="radioWrapperSpan">2</span>
      </label>
      <label>
        <input type="radio" name="bloodType" value="3" />
        <span className="radioWrapperSpan">3</span>
      </label>
      <label>
        <input type="radio" name="bloodType" value="4" />
        <span className="radioWrapperSpan">4</span>
      </label>
    </StyledRadioButton>
  );
};

export default RadioButtons;
