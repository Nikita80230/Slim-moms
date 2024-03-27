import { useEffect } from "react";

import { deleteProduct } from "@/redux/user/operations";
import { selectDate, selectDays } from "@/redux/user/userSlice";

import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

import { compareDates } from "@/utils/compareDates";

import removeIcon from "@/assets/images/removeIcon.png";

import { StyledProductsTable } from "./Styled";

const ProductsTable = () => {
  const dispatch = useAppDispatch();

  const days = useAppSelector(selectDays);
  const date = useAppSelector(selectDate);

  const isDayInDays = days.some((day) => compareDates(day.date, date));

  const currentDayEatenProducts = isDayInDays
    ? days.find((day) => compareDates(day.date, date))!.eatenProducts
    : [];

  const currentDayId = days.find((day) => compareDates(day.date, date))?.id;

  const handleDeleteProduct = (productId: string) => {
    dispatch(
      deleteProduct({
        dayId: currentDayId as string,
        eatenProductId: productId,
      })
    );
  };

  useEffect(() => {}, [days]);

  return (
    <StyledProductsTable>
      <div className="table">
        {currentDayEatenProducts.length > 0 ? (
          <div className="tableBody">
            {currentDayEatenProducts.map(({ title, weight, kcal, id }) => {
              return (
                <div className="tableBodyRow" key={id}>
                  <div className="tableBodyBox productName">{title}</div>
                  <div className="tableBodyBox productWeight">{weight} g</div>
                  <div className="tableBodyBox productKcal">
                    {kcal.toFixed()} kcal
                  </div>
                  <div className="tableBodyBox removeProductBtn">
                    <button
                      type="button"
                      onClick={() => handleDeleteProduct(id)}
                    >
                      <img src={removeIcon} alt="removeIcon" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h2 className="emptyProductListTitle">
            Your product list is empty, add product
          </h2>
        )}
      </div>
    </StyledProductsTable>
  );
};

export default ProductsTable;
{
  /* <div className="tableHead" hidden>
          <div className="tableHeadBox productName">Date</div>
          <div className="tableHeadBox productWeight">Description</div>
          <div className="tableHeadBox productKcal">Category</div>
          <div className="tableHeadBox productKcal">Sum</div>
          <div className="tableHeadBox removeItemBtn" />
        </div> */
}
