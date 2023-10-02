import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MajorShareholders() {
  const { i18n } = useTranslation();
  return (
    <div className="major-shareholders">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <NavLink
            to={{
              pathname: "/majorshareholders/foreignownership",
              search: `${window.location.search}`,
            }}
            className="nav-link"
          >
            {i18n.language === "en"
              ? "Major Shareholders/Foreign Ownership"
              : "كبار المساهمين"}
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={{
              pathname: "/majorshareholders/historical-changes",
              search: `${window.location.search}`,
            }}
          >
            {i18n.language === "en"
              ? "Historical Changes"
              : "التطورات التاريخيه"}
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default MajorShareholders;
