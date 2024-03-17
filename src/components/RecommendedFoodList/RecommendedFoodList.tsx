import { ChangeEvent, FC, useMemo, useState } from "react";

import {
  selectIsLoggedIn,
  selectNotAllowedProducts,
} from "@/redux/user/userSlice";

import { useAppSelector } from "@/hooks/hooks";

import { InputGroup } from "@/components";

import { StyledRecommendedFoodList } from "./Styled";

type Props = {
  listOfProducts?: string[];
};

const RecommendedFoodList: FC<Props> = ({ listOfProducts }) => {
  const [query, setQuery] = useState<string>("");

  const notAllowedProducts = useAppSelector(selectNotAllowedProducts);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredProducts = useMemo(() => {
    if (isLoggedIn) {
      return notAllowedProducts?.filter((product) =>
        product.toLowerCase().includes(query.toLowerCase().trim())
      );
    } else {
      return listOfProducts?.filter((product) =>
        product.toLowerCase().includes(query.toLowerCase().trim())
      );
    }
  }, [isLoggedIn, listOfProducts, notAllowedProducts, query]);

  return (
    <StyledRecommendedFoodList>
      <h3 className="foodListTitle">Food not recommended</h3>

      {notAllowedProducts?.length || listOfProducts?.length ? (
        <>
          <InputGroup
            name="notAllowedProduct"
            labelText="search"
            value={query}
            onChange={handleChange}
          />

          <ul className="foodList">
            {filteredProducts?.map((product) => {
              return <li className="listItem">{product} </li>;
            })}
          </ul>
        </>
      ) : (
        <span className="listItem">There is no diary info!!! </span>
      )}
    </StyledRecommendedFoodList>
  );
};

export default RecommendedFoodList;
