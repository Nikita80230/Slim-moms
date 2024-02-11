import addProductBtnImg from "@/assets/images/addProductBtnImg.png";
import { InputGroup } from "@/components";

import { StyledAddNewProductForm } from "./Styled";

const AddNewProductForm = () => {
  return (
    <StyledAddNewProductForm>
      <div className="inputsWrapper">
        <InputGroup
          className="productName"
          name="productName"
          labelText="Enter product name"
        />
        <InputGroup
          className="productWeight"
          name="productWeight"
          labelText="grams"
        />
      </div>
      <button className="addProductBtn" type="submit">
        <img src={addProductBtnImg} alt="add new product" />
      </button>
    </StyledAddNewProductForm>
  );
};

export default AddNewProductForm;
