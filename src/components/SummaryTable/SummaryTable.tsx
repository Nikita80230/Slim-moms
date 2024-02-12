import { StyledSummaryTable } from "./Styled";

const SummaryTable = () => {
  return (
    <StyledSummaryTable>
      <h3 className="summaryTitle">Summary for 13.08.2023</h3>
      <div className="table">
        <div className="propertyCol">
          <div className="property">Left</div>
          <div className="property">Consumed</div>
          <div className="property">Daily rate</div>
          <div className="property">n% of normal</div>
        </div>
        <div className="valueCol">
          <div className="value">625 kcal</div>
          <div className="value">2175 kcal</div>
          <div className="value">2800 kcal</div>
          <div className="value">78 %</div>
        </div>
      </div>
    </StyledSummaryTable>
  );
};

export default SummaryTable;
