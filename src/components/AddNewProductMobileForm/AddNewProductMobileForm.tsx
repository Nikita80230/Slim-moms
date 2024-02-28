import { Link } from "react-router-dom";

import IconMobileCloseBtnSvg from "@/assets/images/mobileCloseBtnSvg.svg?react";
import { InputGroup } from "@/components";

import { StyledAddNewProductMobileForm } from "./Styled";

import { RoutePath } from "@/types/Routes";

const AddNewProductMobileForm = () => {
  return (
    <StyledAddNewProductMobileForm>
      <Link to={RoutePath.DIARY}>
        <button type="button" className="addProductCloseBtn">
          <IconMobileCloseBtnSvg className="addProductCloseIcon" />
        </button>
      </Link>

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
