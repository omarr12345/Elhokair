import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
export function CorporateActions() {
  const { i18n } = useTranslation();
  const getRecentChangeAndDividends = async () => {
    const res = await axios.get(
      "https://data.argaam.com/api/v1.0/json/ir-api/overview/en",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res.data;
  };

  const getCapitalChangesAndHistoricalAndDividends = async () => {
    const res = await axios.get(
      "https://data.argaam.com/api/v1.0/json/ir-api/corporate-actions/en",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res.data;
  };

  const { data: d1 } = useQuery(
    "recentChangeAndDividends",
    getRecentChangeAndDividends,
    { refetchOnWindowFocus: false }
  );

  const { data: d2 } = useQuery(
    "capitalChangesAndHistoricalAndDividends",
    getCapitalChangesAndHistoricalAndDividends,
    { refetchOnWindowFocus: false }
  );

  return (
    <div className="corporate-actions">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={{
              pathname: "/corporate-actions-fullpage/capital-changes",
              search: `${window.location.search}`,
            }}
          >
            {i18n.language === "en" ? "Capital Changes" : "تغييرات رأس المال"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={{
              pathname: "/corporate-actions-fullpage/historical-dividends",
              search: `${window.location.search}`,
            }}
          >
            {i18n.language === "en"
              ? "Historical Dividends"
              : "التوزيعات النقدية"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={{
              pathname: "/corporate-actions-fullpage/recent-changes",
              search: `${window.location.search}`,
            }}
          >
            {i18n.language === "en" ? "Recent Changes" : "أحدث التغييرات"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={{
              pathname: "/corporate-actions-fullpage/recent-dividends",
              search: `${window.location.search}`,
            }}
          >
            {i18n.language === "en"
              ? " Recent Dividends"
              : "أحدث التوزيعات النقدية"}
          </NavLink>
        </li>
      </ul>

      <Outlet context={{ d1, d2 }} />
    </div>
  );
}
