import React from "react";
import "./Header.css";
import TopLogoImg from "../TopLogoImg/TopLogoImg";
import { useQuery } from "react-query";
import axios from "axios";
import { formatter } from "../../Services/services";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { RiArrowDownCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { fontSize } from "@mui/system";
function Header() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery(
    "headerData",

    () =>
      axios
        .get(`https://data.argaam.com/api/v1.0/json/ir-api/overview/en`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  if (isLoading) {
    return <div className="header sticky-top top-40"></div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="header sticky-top top-40">
        <div className="d-flex justify-content-between top-img-cont">
          <div>
            <TopLogoImg />
          </div>
          <div className="lang my-2 mx-2">
            {i18n.language === "en" ? (
              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => {
                  i18n.changeLanguage("ar");
                  navigate({
                    search: "?lang=ar",
                  });
                }}
              >
                عربي
                <i className="bi bi-translate"></i>
              </button>
            ) : (
              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => {
                  i18n.changeLanguage("en");
                  navigate({
                    search: "?lang=en",
                  });
                }}
              >
                <i className="bi bi-translate"></i>
                English
              </button>
            )}
          </div>
        </div>
        <div className="container-lg">
          <div className="header-content row">
            <div
              className={
                i18n.language === "en"
                  ? "col-md-3 col-lg-3 col-0 col-sm-2 p-0"
                  : "col-md-3 col-lg-3 col-0 col-sm-2 p-0"
              }
            >
              <div
                className={
                  i18n.language === "en"
                    ? "sidebar-head text-start"
                    : "sidebar-head text-end"
                }
              >
                <h1>
                  {i18n.language === "en" ? "Investor" : "علاقات"} <br />
                  {i18n.language === "en" ? "Relations" : "المستثمرين"}
                </h1>
                <p>
                  <AiFillPhone style={{ marginRight: "5px" }} />
                  {i18n.language === "en"
                    ? "+996 11 413 4444"
                    : "+996 11 413 4444"}
                </p>

                <p>
                  <MdAlternateEmail /> IR@alhokair.com
                </p>
              </div>
            </div>
            <div className="col-md-3 col-lg-2 col-12 col-sm-4">
              <Link to="/chart">
                <img
                  className="img-fluid"
                  src={require("../../Assets/header-chart.png")}
                  alt="chart"
                />
              </Link>
              {i18n.language === "en"
                ? " Data delayed 15 mins"
                : "يوجد تأخير في البيانات 15 دقيقه"}
            </div>

            <div className="col-md-2 col-12 col-sm-2">
              <span>{i18n.language === "en" ? "Price" : "السعر"}</span>
              &nbsp;
              <span className="currency">
                {i18n.language === "en" ? "Sar" : "(ريال)"}
              </span>
              <h4>
                {i18n.language === "en"
                  ? data?.companyStockSummary?.closeValue
                  : data?.companyStockSummary?.closeValue}
              </h4>
            </div>
            <div className="col-md-3 col-12 col-sm-2">
              <span>{i18n.language === "en" ? "Change" : " التغير"}</span>&nbsp;
              <span className="currency">
                {i18n.language === "en" ? "Sar" : "(ريال)"}
              </span>
              <h4>
                {i18n.language === "en"
                  ? "-" + formatter(Math.abs(data?.companyStockSummary?.change))
                  : Math.abs(formatter(data?.companyStockSummary?.change)) +
                    "-"}
              </h4>
            </div>
            <div className="col-md-1 col-12 col-sm-2">
              <span>%</span>
              <h4>
                {i18n.language === "en"
                  ? "-" +
                    formatter(
                      Math.abs(data?.companyStockSummary?.percentageChange)
                    )
                  : Math.abs(
                      formatter(data?.companyStockSummary?.percentageChange)
                    ) + "-"}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 small-screen-menu-btn-cont">
        <button
          type="button"
          className="w-100 btn btn-primary d-flex flex-row align-items-center justify-content-center"
          data-bs-toggle="offcanvas"
          data-bs-target="#extraCanvas"
          aria-controls="extraCanvas"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <RiArrowDownCircleFill /> &nbsp;<p>Menu</p>
        </button>
      </div>
    </>
  );
}

export default Header;
