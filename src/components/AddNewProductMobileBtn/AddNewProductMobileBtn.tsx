import addProductBtnImg from "@/assets/images/addProductBtnImg.png";

import { StyledAddNewProductMobileBtn } from "./Style";
import { Link } from "react-router-dom";
import { RoutePath } from "@/types/routes/routes";

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
