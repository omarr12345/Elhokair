import React from "react";
import FinancialStatmentsMainComp from "../../Components/FinancialStatmentsComps/FinancialStatmentsMainComp";

function FinancialStatments() {
  return (
    <div className="financial-statments fw-bold">
      {<FinancialStatmentsMainComp />}
    </div>
  );
}

export default FinancialStatments;
