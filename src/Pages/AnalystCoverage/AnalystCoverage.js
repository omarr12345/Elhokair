import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
function AnalystCoverage() {
  const { i18n } = useTranslation();

  return (
    <div className="analyst-coverage fw-bold">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <NavLink
            to={{
              pathname: "/analyst-coverage/analyst-estimates",
              search: `${window.location.search}`,
            }}
            className="nav-link"
          >
            {i18n.language === "en" ? "Analyst Estimates" : "توقعات المحللين"}
          </NavLink>
        </li>
        <hr />
        <li className="nav-item">
          <NavLink
            to={{
              pathname: "/analyst-coverage/opinions",
              search: `${window.location.search}`,
            }}
            className="nav-link"
          >
            {i18n.language === "en" ? "Opinions" : "آراء"}
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AnalystCoverage;
