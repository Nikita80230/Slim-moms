import { useAppSelector } from "@/hooks/hooks";
import { StyledRecommendedFoodList } from "./Styled";
import { selectNotAllowedProducts } from "@/redux/user/userSlice";
import { ChangeEvent, useMemo, useState } from "react";
import { InputGroup } from "..";

const RecommendedFoodList = () => {
  const [query, setQuery] = useState<string>("");

  const notAllowedProducts = useAppSelector(selectNotAllowedProducts);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredProducts = useMemo(
    () =>
      notAllowedProducts?.filter((product) =>
        product.toLowerCase().includes(query.toLowerCase().trim())
      ),
    [notAllowedProducts, query]
  );

  return (
    <StyledRecommendedFoodList>
      <h3 className="foodListTitle">Food not recommended</h3>
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
        <li className="listItem">Flour products </li>
      </ul>
    </StyledRecommendedFoodList>
  );
};

export default RecommendedFoodList;
