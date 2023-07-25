/* eslint-disable jsx-a11y/heading-has-content */
import React, { useRef, useEffect } from "react";
import "./Sidebar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Sidebar() {
  const collapseRef = useRef(null);
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const handleLinksClick = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    if (window.location.search === "?lang=ar") {
      i18n.changeLanguage("ar");
      navigate({
        search: "?lang=ar",
      });
    } else {
      i18n.changeLanguage("en");
      navigate({
        search: "?lang=en",
      });
    }
  }, [i18n, navigate]);
  return (
    <div className="sidebar">
      <nav className="nav flex-column navbar-expand-lg">
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="extraCanvas"
          aria-labelledby="extraCanvasLabel"
          ref={collapseRef}
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <div className="offcanvas-body">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="extraCanvasLabel"></h5>
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <AiFillCloseCircle
                  style={{
                    color: "#0068b3",
                    fontSize: "22px",
                  }}
                />
              </button>
            </div>

            <ul>
              <li className="nav-item">
                <NavLink
                  onClick={handleLinksClick}
                  className="nav-link"
                  to={{
                    pathname: "/overview",

                    search: `${window.location.search}`,
                  }}
                >
                  {i18n.language === "en" ? "Overview" : "معلومات الشركه"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleLinksClick}
                  className="nav-link"
                  to={{
                    pathname: "/profile",
                    search: `${window.location.search}`,
                  }}
                >
                  {i18n.language === "en" ? "Profile" : "ملف الشركه"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleLinksClick}
                  className="nav-link"
                  to={{
                    pathname: "/board&managment",

                    search: `${window.location.search}`,
                  }}
                >
                  {i18n.language === "en"
                    ? "Organizational Structure"
                    : "الهيكل التنظيمي"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/chart",
                    search: `${window.location.search}`,
                  }}
                  onClick={handleLinksClick}
                  className="nav-link"
                >
                  {i18n.language === "en" ? "Chart" : "تشارت"}
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/investor-calculator",

                    search: `${window.location.search}`,
                  }}

                  className="nav-link"
                >
                  {i18n.language === "en"
                    ? "Investor Calculator"
                    : "حاسبة المستثمر"}
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  onClick={handleLinksClick}
                  className="nav-link"
                  to={{
                    pathname: "/majorshareholders",

                    search: `${window.location.search}`,
                  }}
                >
                  {i18n.language === "en"
                    ? "Major Shareholders"
                    : "كبار المساهمين"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleLinksClick}
                  className="nav-link"
                  to={{
                    pathname: "/negotiated-deals",

                    search: `${window.location.search}`,
                  }}
                >
                  {i18n.language === "en"
                    ? "Negotiated Deals"
                    : " الصفقات الخاصه"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleLinksClick}
                  className="nav-link"
                  to={{
                    pathname: "/financial-statments",
                    search: `${window.location.search}`,
                  }}
                >
                  {i18n.language === "en"
                    ? "Financial Statments"
                    : "القوائم الماليه"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleLinksClick}
                  className="nav-link"
                  to={{
                    pathname: "/financial-ratios",
                    search: `${window.location.search}`,
                  }}
                >
                  {i18n.language === "en"
                    ? "Financial Ratios"
                    : "المؤشرات الماليه"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleLinksClick}
                  className="nav-link"
                  to={{
                    pathname: "/financial-reports",
                    search: `${window.location.search}`,
                  }}
                >
                  {i18n.language === "en"
                    ? "Financial Reports"
                    : "التقارير الماليه "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleLinksClick}
                  className="nav-link"
                  to={{
                    pathname: "/investor-presentations",

                    search: `${window.location.search}`,
                  }}
                >
                  {i18n.language === "en"
                    ? "Investor Presentation"
                    : "عرض المستثمر"}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  onClick={handleLinksClick}
                  className="nav-link"
                  to={{
                    pathname: "/business-segments",

                    search: `${window.location.search}`,
                  }}
                >
                  {i18n.language === "en"
                    ? "Business Segments"
                    : "قطاعات الأعمال"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleLinksClick}
                  className="nav-link"
                  to={{
                    pathname: "/corporate-actions",

                    search: `${window.location.search}`,
                  }}
                >
                  {i18n.language === "en"
                    ? "Corporate Actions"
                    : "اجراءات الشركه"}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  onClick={handleLinksClick}
                  className="nav-link"
                  to={{
                    pathname: "/projects",

                    search: `${window.location.search}`,
                  }}
                >
                  {i18n.language === "en" ? "Projects" : "المشاريع"}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  onClick={handleLinksClick}
                  className="nav-link"
                  to={{
                    pathname: "/analyst-coverage",
                    search: `${window.location.search}`,
                  }}
                >
                  {i18n.language === "en"
                    ? "Analyst Coverage"
                    : "التحليل القطاعي"}{" "}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  onClick={handleLinksClick}
                  className="nav-link"
                  to={{
                    pathname: "/disclosures",
                    search: `${window.location.search}`,
                  }}
                >
                  {i18n.language === "en" ? "Disclosures" : "الإفصاحات"}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleLinksClick}
                  className="nav-link"
                  to={{
                    pathname: "/subscription-center",
                    search: `${window.location.search}`,
                  }}
                >
                  {i18n.language === "en"
                    ? "Subscription Center"
                    : "مركز الاشتراك"}{" "}
                </NavLink>
              </li>
              <br />
              <br />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
