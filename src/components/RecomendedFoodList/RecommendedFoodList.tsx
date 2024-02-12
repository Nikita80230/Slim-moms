import { StyledRecommendedFoodList } from "./Styled";

const RecommendedFoodList = () => {
  return (
    <StyledRecommendedFoodList>
      <h3 className="foodListTitle">Food not recommended</h3>
      <ul className="foodList">
        <li className="listItem">Flour products </li>
        <li className="listItem">Milk </li>
        <li className="listItem">Red meat </li>
        <li className="listItem">Smoked meats</li>
      </ul>
    </StyledRecommendedFoodList>
  );
};

export default RecommendedFoodList;
