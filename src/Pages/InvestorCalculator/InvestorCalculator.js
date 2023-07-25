import React from "react";
import "./InvestorCalculator.css";
import ByAmountInvested from "../../Components/InvestCalculatorComps/ByAmountInvested/ByAmountInvested";
const InvestorCalculator = () => {
  return (
    <div className="investor-calculator">
      <ByAmountInvested />
    </div>
  );
};

export default InvestorCalculator;
