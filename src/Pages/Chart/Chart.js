import React from "react";
import "./Chart.css";
import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Chart = () => {
  const { i18n } = useTranslation()
  return (
    <div className="chart-page my-5">
      <ul className="nav nav-underline">

        <li className="nav-item">
          <NavLink
            to={{
              pathname: "/chart/stock-chart",
              search: `${window.location.search}`,
            }}
            className="nav-link"
          >
            {i18n.language === "en" ? "Stock Chart" : "تشارت"}
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={{
              pathname: "/chart/historical-trading-data",
              search: `${window.location.search}`,
            }}
          >
            {i18n.language === "en" ? " Historical Trading Data" : "بيانات التداول"}
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Chart;
