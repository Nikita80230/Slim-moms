import removeIcon from "@/assets/images/removeIcon.png";

import { StyledProductsTable } from "./Styled";

const ProductsTable = () => {
  return (
    <StyledProductsTable>
      <div className="table">
        {/* <div className="tableHead" hidden>
          <div className="tableHeadBox productName">Date</div>
          <div className="tableHeadBox productWeight">Description</div>
          <div className="tableHeadBox productKcal">Category</div>
          <div className="tableHeadBox productKcal">Sum</div>
          <div className="tableHeadBox removeItemBtn" />
        </div> */}
        <div className="tableBody">
          <div className="tableBodyRow">
            <div className="tableBodyBox productName">eggplant</div>
            <div className="tableBodyBox productWeight">100 g</div>
            <div className="tableBodyBox productKcal">320 kcal</div>
            <div className="tableBodyBox removeProductBtn">
              <button type="button">
                <img src={removeIcon} alt="removeIcon" />
              </button>
            </div>
          </div>
          <div className="tableBodyRow">
            <div className="tableBodyBox productName">eggplant</div>
            <div className="tableBodyBox productWeight">100 g</div>
            <div className="tableBodyBox productKcal">320 kcal</div>
            <div className="tableBodyBox removeProductBtn">
              <button type="button">
                <img src={removeIcon} alt="removeIcon" />
              </button>
            </div>
          </div>
          <div className="tableBodyRow">
            <div className="tableBodyBox productName">eggplant</div>
            <div className="tableBodyBox productWeight">100 g</div>
            <div className="tableBodyBox productKcal">320 kcal</div>
            <div className="tableBodyBox removeProductBtn">
              <button type="button">
                <img src={removeIcon} alt="removeIcon" />
              </button>
            </div>
          </div>
          <div className="tableBodyRow">
            <div className="tableBodyBox productName">eggplant</div>
            <div className="tableBodyBox productWeight">100 g</div>
            <div className="tableBodyBox productKcal">320 kcal</div>
            <div className="tableBodyBox removeProductBtn">
              <button type="button">
                <img src={removeIcon} alt="removeIcon" />
              </button>
            </div>
          </div>
          <div className="tableBodyRow">
            <div className="tableBodyBox productName">eggplant</div>
            <div className="tableBodyBox productWeight">100 g</div>
            <div className="tableBodyBox productKcal">320 kcal</div>
            <div className="tableBodyBox removeProductBtn">
              <button type="button">
                <img src={removeIcon} alt="removeIcon" />
              </button>
            </div>
          </div>
          <div className="tableBodyRow">
            <div className="tableBodyBox productName">eggplant</div>
            <div className="tableBodyBox productWeight">100 g</div>
            <div className="tableBodyBox productKcal">320 kcal</div>
            <div className="tableBodyBox removeProductBtn">
              <button type="button">
                <img src={removeIcon} alt="removeIcon" />
              </button>
            </div>
          </div>
          <div className="tableBodyRow">
            <div className="tableBodyBox productName">eggplant</div>
            <div className="tableBodyBox productWeight">100 g</div>
            <div className="tableBodyBox productKcal">320 kcal</div>
            <div className="tableBodyBox removeProductBtn">
              <button type="button">
                <img src={removeIcon} alt="removeIcon" />
              </button>
            </div>
          </div>
          <div className="tableBodyRow">
            <div className="tableBodyBox productName">eggplant</div>
            <div className="tableBodyBox productWeight">100 g</div>
            <div className="tableBodyBox productKcal">320 kcal</div>
            <div className="tableBodyBox removeProductBtn">
              <button type="button">
                <img src={removeIcon} alt="removeIcon" />
              </button>
            </div>
          </div>
          <div className="tableBodyRow">
            <div className="tableBodyBox productName">eggplant</div>
            <div className="tableBodyBox productWeight">100 g</div>
            <div className="tableBodyBox productKcal">320 kcal</div>
            <div className="tableBodyBox removeProductBtn">
              <button type="button">
                <img src={removeIcon} alt="removeIcon" />
              </button>
            </div>
          </div>
          <div className="tableBodyRow">
            <div className="tableBodyBox productName">eggplant</div>
            <div className="tableBodyBox productWeight">100 g</div>
            <div className="tableBodyBox productKcal">320 kcal</div>
            <div className="tableBodyBox removeProductBtn">
              <button type="button">
                <img src={removeIcon} alt="removeIcon" />
              </button>
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
    </StyledProductsTable>
  );
};

export default ProductsTable;
