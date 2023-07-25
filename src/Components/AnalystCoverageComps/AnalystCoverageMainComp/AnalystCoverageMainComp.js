import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import Loader from "../../GlobalComps/Loader/Loader";
import AnalystCoverageAccordion from "../AnalystCoverageAccordion/AnalystCoverageAccordion";
import "./AnalystCoverageMainComp.css";
function AnalystCoverageMainComp() {
  const { i18n } = useTranslation();
  const [fiscalPeriodType, setFiscalPeriodType] = useState("year");
  //fetch
  const { isLoading, isError, data, refetch } = useQuery(
    "AnalystCoverageData",
    () =>
      axios
        .get(
          `https://data.argaam.com/api/v1.0/json/ir-widget/analyst-estimates?fiscalPeriodType=${fiscalPeriodType}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    refetch();
  }, [fiscalPeriodType, refetch]);

  if (isLoading) {
    <div>
      <Loader />
    </div>;
  }
  if (isError) {
    <div>...Error</div>;
  }

  return (
    <div className="analyst-coverage-main-comp">
      <div className="d-flex justify-content-between align-items-center mt-5 mb-3">
        <div className="my-2 pills-tabs">
          <button
            id="yr-tab"
            className="btn btn-outline-dark btn-sm px-3 border-0 m-2 active"
            onClick={() => {
              setFiscalPeriodType("year");
              document.getElementById("yr-tab").classList.add("active");
              document.getElementById("usd-tab").classList.remove("active");
            }}
          >
            {i18n.language === "en" ? "Annual" : "سنوي"}
          </button>
          <button
            id="usd-tab"
            onClick={() => {
              setFiscalPeriodType("quarter");
              document.getElementById("usd-tab").classList.add("active");
              document.getElementById("yr-tab").classList.remove("active");
            }}
            className="btn btn-outline-dark btn-sm px-3 border-0 m-2 "
          >
            {i18n.language === "en" ? "Quarter" : "ربع سنوي"}
          </button>
        </div>
      </div>
      <AnalystCoverageAccordion content={data} type={fiscalPeriodType} />
    </div>
  );
}

export default AnalystCoverageMainComp;
