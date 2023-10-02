import React from "react";
import "./FinancialRatios.css";
import { useQuery } from "react-query";
import axios from "axios";
import { isNegative } from "../../../Services/services";
import { useTranslation } from "react-i18next";
import Loader from "../../GlobalComps/Loader/Loader";
function FinancialRatios() {
  const { i18n } = useTranslation();

  const { isLoading, isError, data } = useQuery(
    ["finan-ratios"],
    async () =>
      await axios
        .get(
          "https://data.argaam.com/api/v1.0/json/ir-api/overview/en.financialRatios",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => res.data)
  );

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="financial-ratios my-5 ">
      <h4>
        {i18n.language === "en" ? "Financial Ratios" : "المؤشرات الماليه"}
      </h4>
      <hr />
      <div className="row my-2">
        {data?.financialRatios?.fields?.map((field, f) => {
          return (
            <React.Fragment key={f}>
              <div className="col-md-4 col-6 my-2">
                {i18n.language === "en" ? field?.nameEn : field?.nameAr}
              </div>
              <div className="col-md-2 col-6 my-2 text-center">
                {isNegative(field?.values?.value) || "--"}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default FinancialRatios;
