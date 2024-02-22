import { InputGroup } from "..";
import { StyledAddNewProductMobileForm } from "./Styled";

const AddNewProductMobileForm = () => {
  return (
    <StyledAddNewProductMobileForm>
      <form className="addProductForm">
        <div className="formInputs">
          <InputGroup
            className="formInput"
            name="productName"
            labelText="Enter product name"
          />
          <InputGroup
            className="formInput"
            name="productWeight"
            labelText="Grams"
          />
        </div>
        <button className="addProductBtn" type="submit">
          Add
        </button>
      </form>
    </StyledAddNewProductMobileForm>
  );
};

export default AddNewProductMobileForm;
