import React, { useState } from "react";
import { useQuery } from "react-query";
import { useEffect } from "react";
import axios from "axios";
import Accordion from "../GlobalComps/Accordion/Accordion";
import { useTranslation } from "react-i18next";
import Loader from "../GlobalComps/Loader/Loader";
function FinancialStatmentsMainComp() {
  const { i18n } = useTranslation();

  const [fiscalPeriodType, setFiscalPeriodType] = useState("year");
  const [currency, setCurrency] = useState("sar");

  //fetch
  const { isLoading, isError, data, refetch } = useQuery(
    "financialStatnmentsData",
    () =>
      axios
        .get(
          `https://data.argaam.com/api/v1.0/json/ir-api/financial-statements/:lang?fiscalPeriodType=${fiscalPeriodType}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => res.data),
    {
      // cacheTime: 500,
      // staleTime: 3000,
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
    <div className="financial-statments-main-comp">
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
        <div className="my-2 pills-tabs">
          <span>
            {/* <h5>{i18n.language === "en" ? "Currency" : "العملة"}</h5> */}
            <button
              className="btn btn-outline-dark btn-sm px-3 border-0 m-2"
              id="usd-currency"
              onClick={(e) => {
                setCurrency("usd");
                document.getElementById("usd-currency").classList.add("active");
                document
                  .getElementById("sar-currency")
                  .classList.remove("active");
              }}
            >
              {i18n.language === "en" ? "USD" : "دولار"}
            </button>
          </span>

          <span>
            <button
              id="sar-currency"
              className="btn btn-outline-dark btn-sm px-3 border-0 m-2 active"
              onClick={(e) => {
                setCurrency("sar");
                document.getElementById("sar-currency").classList.add("active");
                document
                  .getElementById("usd-currency")
                  .classList.remove("active");
              }}
            >
              {i18n.language === "en" ? "SAR" : "ريال"}
            </button>
          </span>
        </div>
      </div>

      <Accordion content={data} type={fiscalPeriodType} currency={currency} />
    </div>
  );
}

export default FinancialStatmentsMainComp;
