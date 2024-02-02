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
            <label>
              <span className="labelText">height*</span>
              <input type="text" name="height" />
            </label>
            <label>
              <span className="labelText">age*</span>
              <input type="text" name="age" />
            </label>
            <label>
              <span className="labelText">Current weight*</span>
              <input type="text" name="current-weight" />
            </label>
          </div>
          <div className="calculateCaloriesFormRight">
            <label>
              <span className="labelText">Desired weight *</span>
              <input type="text" name="desired-weight" />
            </label>

            <div className="radioWrapper">
              <span className="radioTitle">Blood type *</span>
              <div className="radioInput">
                <label>
                  <input type="radio" name="bloodType" id="1" value="1" />
                  <span className="radioWrapperSpan">1</span>
                </label>
                <label>
                  <input type="radio" name="bloodType" id="2" value="2" />
                  <span className="radioWrapperSpan">2</span>
                </label>
                <label>
                  <input type="radio" name="bloodType" id="3" value="3" />
                  <span className="radioWrapperSpan">3</span>
                </label>
                <label>
                  <input type="radio" name="bloodType" id="4" value="4" />
                  <span className="radioWrapperSpan">4</span>
                </label>
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
