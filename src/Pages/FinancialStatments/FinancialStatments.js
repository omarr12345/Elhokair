import React from "react";
import "./FinancialStatments.css";
import FinancialStatmentsMainComp from "../../Components/FinancialStatmentsComps/FinancialStatmentsMainComp";

function FinancialStatments() {
  return (
    <div className="financial-statments">{<FinancialStatmentsMainComp />}</div>
  );
}

export default FinancialStatments;
