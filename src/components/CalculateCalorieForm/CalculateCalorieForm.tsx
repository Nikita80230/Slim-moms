import { InputGroup } from "..";
import RadioButtons from "../RadioButtons/RadioButton";
import { StyledCalculateCalorieForm } from "./Styled";

const CalculateCalorieForm = () => {
  return (
    <StyledCalculateCalorieForm>
      <h1 className="calculateCaloriesFormTitle">
        Calculate your daily calorie intake right now
      </h1>
      <form className="calculateCaloriesForm">
        <div className="calculateCaloriesFormInputs">
          <div className="calculateCaloriesFormLeft">
            <InputGroup required name={"height"} labelText="height" />
            <InputGroup required name={"age"} labelText="age" />
            <InputGroup
              required
              name={"currentWeight"}
              labelText="current weight"
            />
          </div>
          <div className="calculateCaloriesFormRight">
            <InputGroup
              required
              className="desiredWeight"
              name={"desiredWeight"}
              labelText="desired weight"
            />
            <div className="radioWrapper">
              <span className="radioTitle">Blood type *</span>
              <div className="radioInputWrapper">
                <InputGroup type="radio" name="bloodType" labelText="1" />
                <InputGroup type="radio" name="bloodType" labelText="2" />
                <InputGroup type="radio" name="bloodType" labelText="3" />
                <InputGroup type="radio" name="bloodType" labelText="4" />
              </div>
            </div>
          </div>
        </div>

        <button className="calculateCalorieFormButton" type="button">
          Start losing weight
        </button>
      </form>
    </StyledCalculateCalorieForm>
  );
};

export default CalculateCalorieForm;
