import "./FinancialReports.css";
import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
function FinancialReports() {
  const { i18n } = useTranslation();

  return (
    <div className="financial-reports">
      <div className="tabs-container my-5 fw-bold m-2">
        <span>
          <NavLink
            to={{
              pathname: "/financial-reports/annual",
              search: `${window.location.search}`,
            }}
            className="btn btn-primary fw-bold m-2"
          >
            {i18n.language === "en" ? "Annual" : "سنوي"}
          </NavLink>
        </span>
        <span>
          <NavLink
            to={{
              pathname: "/financial-reports/quarter",
              search: `${window.location.search}`,
            }}
            className="btn btn-primary fw-bold m-2"
          >
            {i18n.language === "en" ? "Quarter" : "ربع سنوي"}
          </NavLink>
        </span>
        <span>
          <NavLink
            to={{
              pathname: "/financial-reports/board-report",
              search: `${window.location.search}`,
            }}
            className="btn btn-primary fw-bold m-2"
          >
            {i18n.language === "en" ? "Board" : " تقرير مجلس الادارة"}
          </NavLink>
        </span>
      </div>
      <h4>
        {i18n.language === "en" ? "Financial Reports" : "التقارير المالية"}
      </h4>
      <hr />
      <Outlet />
    </div>
  );
}

export default FinancialReports;
