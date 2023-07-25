import React from "react";
import "./MarketData.css";
import { useQuery } from "react-query";
import axios from "axios";
import { formatter, isNegativePercentage } from "../../../Services/services";
import { useTranslation } from "react-i18next";
import Loader from "../../GlobalComps/Loader/Loader.js";
function MarketData() {
  const { i18n } = useTranslation();

  function getStockData() {
    return axios.get(
      "https://data.argaam.com/api/v1.0/json/ir-widget/stock-summary",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

  function getSecStockData() {
    return axios.get(
      "https://data.argaam.com/api/v1.0/json/ir-api/overview/en.companyStockSummary",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

  const { isLoading: fisrstStockDataLoading, data: firstData } = useQuery(
    "firstStockData",
    getStockData
  );
  const { isLoading: secStockDataLoading, data: SecdData } = useQuery(
    "secStockData",
    getSecStockData
  );

  if (fisrstStockDataLoading && secStockDataLoading) {
    return <Loader />;
  }
  return (
    <div className="my-5">
      <div className="market-data">
        <div className="row justify-content-between align-items-center mb-3">
          <div className="col-md-3 col-12">
            <p className="fw-bold">
              {i18n.language === "en" ? "Market Value" : " القيمه السوقيه"}
            </p>
            <span>
              <h1 className="fw-bold">
                {formatter(firstData?.data?.marketValue)}
              </h1>
            </span>
            <br />
          </div>
          <div className="col-md-2 col-sm-3 col-5">
            <p className="hr">
              {i18n.language === "en" ? "3 Months" : " 3 اشهر"}
            </p>
            <span>
              <h5>{isNegativePercentage(firstData?.data?.month3Change)}</h5>
            </span>
          </div>
          <div className="col-md-2 col-sm-3 col-5">
            <p className="hr">
              {i18n.language === "en" ? "6 Months" : " 6 أشهر"}
            </p>
            <span className="text-success">
              <h5>{isNegativePercentage(firstData?.data?.month6Change)}</h5>
            </span>
          </div>
          <div className="col-md-2 col-sm-3 col-5">
            <p className="hr">
              {i18n.language === "en" ? "12 Months" : " 12 شهر"}
            </p>
            <span className="text-success">
              <h5>{isNegativePercentage(firstData?.data?.ytdChange)}</h5>
            </span>
          </div>
          <div className="col-md-3 col-sm-3 col-5">
            <p className="hr">
              {i18n.language === "en" ? "Year To Date" : " من بداية العام"}
            </p>
            <span className="text-success">
              <h5>{isNegativePercentage(firstData?.data?.ybgnChange)}</h5>
            </span>
          </div>
        </div>
        <hr />
        <div className="row justify-content-between align-items-center mb-3">
          <div
            className="col-md-3 col-sm-3 col-5"
            style={{ borderRight: "2px solid gray" }}
          >
            <p className="hr">
              {i18n.language === "en" ? "Volume" : " الحجم"}
            </p>
            <span>
              <h5>{formatter(firstData?.data?.volume)}</h5>
            </span>
          </div>
          <div
            className="col-md-3 col-sm-3 col-5"
            style={{ borderRight: "2px solid gray" }}
          >
            <p className="hr">
              {i18n.language === "en" ? "Turnover" : "التضخم"}
            </p>
            <span>
              <h5>{formatter(SecdData?.data?.companyStockSummary?.amount)}</h5>
            </span>
          </div>
          <div className="col-md-3 col-sm-3 col-5">
            <p className="hr">
              {i18n.language === "en" ? "Transactions" : "عدد الصفقات"}
            </p>
            <span>
              <h5>
                {formatter(SecdData?.data?.companyStockSummary?.contractCount)}
              </h5>
            </span>
          </div>
        </div>
        <hr />
        <div className="row justify-content-between align-items-center">
          <div
            className="col-md-3 col-sm-3 col-5"
            style={{ borderRight: "2px solid gray" }}
          >
            <p className="hr">
              {i18n.language === "en" ? "Avg Vol" : "حجم التداول (3 أشهر)"}
            </p>
            <span>
              <h5> {formatter(firstData?.data?.avgVolume3Months)}</h5>
            </span>
          </div>
          <div
            className="col-md-3 col-sm-3 col-5"
            style={{ borderRight: "2px solid gray" }}
          >
            <p className="hr">
              {i18n.language === "en" ? "Avg Turnover" : "حجم التضخم (3 أشهر)"}
            </p>
            <span>
              <h5>{formatter(firstData?.data?.avgTurnover3Months)}</h5>
            </span>
          </div>
          <div className="col-md-3 col-sm-3 col-5">
            <p className="hr">
              {i18n.language === "en"
                ? "Avg Transactions"
                : "عدد الصفقات (3 أشهر)"}
            </p>
            <hr />
            <span>
              <h5>{formatter(firstData?.data?.avgTransactions3Months)}</h5>
            </span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default MarketData;
