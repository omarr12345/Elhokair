import React, { useEffect, useState } from "react";
import "./Disclosers.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useQuery } from "react-query";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import NotesModal from "../../GlobalComps/NotesModal/NotesModal";
import { useTranslation } from "react-i18next";
import Loader from "../../GlobalComps/Loader/Loader";
function Disclosers() {
  const { i18n } = useTranslation();
  const [curr, setCurr] = useState("");
  const getOverviewData = async () => {
    const res = await axios.get(
      `https://data.argaam.com/api/v1.0/json/ir-api/overview/${i18n.language}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res.data;
  };

  const getLatestNews = async () => {
    const res = await axios.get(
      `https://data.argaam.com/api/v1.0/json/ir-widget/latest-news-articles/${i18n.language}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res.data;
  };

  const getAnalystEstimates = async () => {
    const res = await axios.get(
      `https://data.argaam.com/api/v1.0/json/ir-widget/analyst-estimates-articles/${i18n.language}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res.data;
  };

  const {
    data: overviewData,
    isLoading: disclosersDataIsLoading,
    refetch: refetchOverview,
  } = useQuery("disclosures-data", getOverviewData, {
    refetchOnWindowFocus: false,
  });
  const {
    data: latestNewsData,
    isLoading: latestNewsDataLoading,
    refetch: refetchLatestNews,
  } = useQuery("latest-news-data", getLatestNews, {
    refetchOnWindowFocus: false,
  });
  const {
    data: analystEstimatesData,
    isLoading: analystEstimateLoading,
    refetch: refetchAnalystEstimates,
  } = useQuery("analyst-estimates-data", getAnalystEstimates, {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetchOverview();
    refetchLatestNews();
    refetchAnalystEstimates();
  }, [
    i18n.language,
    refetchLatestNews,
    refetchAnalystEstimates,
    refetchOverview,
  ]);

  if (
    disclosersDataIsLoading ||
    latestNewsDataLoading ||
    analystEstimateLoading
  ) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="disclosers">
      <div className="disclosure-subcomp mt-5">
        <div className="d-flex flex-row justify-content-between align-items-baseline">
          <h4> {i18n.language === "en" ? "Disclosures " : "الإفصاحات"} </h4>
          <Link
            className="read-more"
            to={{
              pathname: "/disclosures/main-sec",

              search: `${window.location.search}`,
            }}
          >
            {i18n.language === "en" ? "Read More" : "المزيد"}
            {i18n.language === "en" ? (
              <AiOutlineArrowRight />
            ) : (
              <AiOutlineArrowLeft />
            )}
          </Link>
        </div>
        <hr />
        {overviewData?.discloser.slice(0, 3).map((dis, disIndex) => {
          return (
            <div className="row my-2" key={disIndex}>
              <div className="col-md-2 col-lg-2 col-sm-12 col-12">
                <p>
                  {moment(dis.publishedOn, "DD-MM-YYYY[T]HH:mm:ss").format(
                    "DD/MM/YYYY"
                  )}
                </p>
              </div>
              <div className="col-md-9 col-lg-9 col-sm-10 col-10">
                <p> {dis.title} </p>
              </div>
            </div>
          );
        })}
        <hr />
      </div>
      {/* {/ * Latest News * /} */}
      <div className="latest-news my-5">
        <div className="d-flex flex-row justify-content-between align-items-baseline">
          <h4> {i18n.language === "en" ? "LatestNews " : "أحدث الأخبار"} </h4>
          <Link
            className="read-more"
            to={{
              pathname: "/disclosures/news",

              search: `${window.location.search}`,
            }}
          >
            {i18n.language === "en" ? "Read More " : "المزيد"}
            {i18n.language === "en" ? (
              <AiOutlineArrowRight />
            ) : (
              <AiOutlineArrowLeft />
            )}
          </Link>
        </div>
        <hr />
        {latestNewsData?.slice(0, 3)?.map((latestNew, latestNewIndex) => {
          return (
            <div className="new my-3" key={latestNewIndex}>
              <p className="my-3"> {latestNew.title} </p>
              <div className="d-flex flex-row justify-content-between align-items-baseline">
                <div>
                  <p>
                    {i18n.language === "en" ? "Argaam." : "أرقام."}
                    {moment(
                      latestNew.publishedOn,
                      "DD-MM-YYYY[T]HH:mm:ss"
                    ).format("DD/MM/YYYY")}
                  </p>
                </div>
                <div className="read-btn">
                  <a
                    className="btn btn-outline-secondary btn-sm"
                    href={latestNew.link}
                  >
                    {i18n.language === "en" ? "Read More " : "المزيد"}
                  </a>
                </div>
              </div>
              <br />
              <hr />
            </div>
          );
        })}
      </div>
      {/* {/ * Calendar * /} */}
      <div className="calendar my-5">

        <div className="d-flex flex-row justify-content-between my-3 align-items-baseline">
          <h4> {i18n.language === "en" ? "Calendar " : "المفكره"} </h4>
          <Link
            className="read-more"
            to={{
              pathname: "/disclosures/events",

              search: `${window.location.search}`,
            }}
          >
            {i18n.language === "en" ? "Read More " : "المزيد"}
            {i18n.language === "en" ? (
              <AiOutlineArrowRight />
            ) : (
              <AiOutlineArrowLeft />
            )}
          </Link>
        </div>
        <hr />
        {overviewData?.events?.slice(0, 3)?.map((event, eventIndex) => {
          return (
            <React.Fragment key={eventIndex}>
              <div
                className="new my-3 d-flex justify-content-between"
              >
                <div className="calendar-date mx-3">
                  <p> {moment(event.occursOn).format("DD MMM YYYY")} </p>
                </div>

                <div className="d-flex flex-column">
                  <div>
                    {i18n.language === "en"
                      ? event?.typeNameEn
                      : event?.typeNameAr}
                  </div>
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          i18n.language === "en"
                            ? event?.descriptionEn
                            : event?.descriptionAr,
                      }}
                      className="html-converted-txt"
                    />
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-baseline">
                    <div className="company-name">
                      <span className="company-name-en">
                        {i18n.language === "en"
                          ? event?.companyNameEn
                          : event?.companyNameAr}
                      </span>
                    </div>

                    <div className="details-btn">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => {
                          i18n.language === "en"
                            ? setCurr(event?.descriptionEn)
                            : setCurr(event?.descriptionAr);
                        }}
                      >
                        {i18n.language === "en" ? "details" : "التفاصيل"}
                      </button>
                    </div>
                  </div>
                </div>

                <hr />
              </div>
              <hr />
            </React.Fragment>
          );
        })}
      </div>

      {/* Analyst Estimates*/}
      <div className="analyst-estimates">
        <div className="d-flex flex-row justify-content-between my-3 align-items-baseline">
          <h4>
            {" "}
            {i18n.language === "en"
              ? "Analyst Estimates"
              : "تقديرات المحللين"}{" "}
          </h4>
          <Link
            className="read-more"
            to={{
              pathname: "/analyst-coverage",

              search: `${window.location.search}`,
            }}
          >
            {i18n.language === "en" ? "Read More " : "المزيد"}
            {i18n.language === "en" ? (
              <AiOutlineArrowRight />
            ) : (
              <AiOutlineArrowLeft />
            )}
          </Link>
        </div>
        <hr />
        {analystEstimatesData
          ?.slice(0, 5)
          .map((analystEst, analystEstIndex) => {
            return (
              <div className="row" key={analystEstIndex}>
                <div className="col-md-3 col-12 my-2">
                  {moment(
                    analystEst.publishedOn,
                    "DD-MM-YYYY[T]HH:mm:ss"
                  ).format("DD/MM/YYYY")}
                </div>
                <div className="col-md-9 col-12 my-2">
                  <p> {analystEst.title}</p>
                </div>
              </div>
            );
          })}
      </div>
      <hr />

      <NotesModal content_2={curr} />
    </div>
  );
}

export default Disclosers;
