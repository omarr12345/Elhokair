import React from "react";
import "./Overview.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Overview() {
  const { i18n } = useTranslation();
  return (
    <div className="overview my-1">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <NavLink
            to={{
              pathname: "/overview/company-overview",
              search: `${window.location.search}`,
            }}
            className="nav-link"          >
            {i18n.language === "en" ? "Company Overview" : "رؤية الشركه"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={{
              pathname: "/overview/market-data",
              search: `${window.location.search}`,
            }}
            className="nav-link"
          >
            {i18n.language === "en" ? "Market Data" : "بيانات السوق"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={{
              pathname: "/overview/financial-ratios",
              search: `${window.location.search}`,
            }}
          >
            {i18n.language === "en" ? "Financial Ratios" : " المؤشرات الماليه"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={{
              pathname: "/overview/corporate-actions",
              search: `${window.location.search}`,
            }}
            className="nav-link"          >
            {i18n.language === "en" ? "Corporate Actions" : "اجراءات الشركه"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={{
              pathname: "/overview/disclosers",
              search: `${window.location.search}`,
            }}
            className="nav-link"          >
            {i18n.language === "en" ? "Disclosures" : "الافصاحات"}
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Overview;
