import { Link } from "react-router-dom";

import addProductBtnImg from "@/assets/images/addProductBtnImg.png";
import { RoutePath } from "@/routes/routes";

import { StyledAddNewProductMobileBtn } from "./Style";

const AddNewProductMobileBtn = () => {
  return (
    <StyledAddNewProductMobileBtn>
      <Link to={RoutePath.MOBILE_ADD_PRODUCT_PAGE}>
        <button className="addProductBtn" type="submit">
          <img src={addProductBtnImg} alt="add new product" />
        </button>
      </Link>
    </StyledAddNewProductMobileBtn>
  );
};

export default AddNewProductMobileBtn;
