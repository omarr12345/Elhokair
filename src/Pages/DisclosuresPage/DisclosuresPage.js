import axios from "axios";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "../../Components/GlobalComps/Loader/Loader";
import "./DisclosuresPage.css";
function DisclosuresPage() {
  const { i18n } = useTranslation();
  const { isLoading: AnalystEstimatesLoading, data: AnalystEstimatesData, refetch: AnalystEstimatesRefetch } = useQuery(
    ["AnalystEstimates"],
    () =>
      axios
        .get(`https://data.argaam.com/api/v1.0/json/ir-api/overview/${i18n.language}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { isLoading: DisclosuresLoading, data: disclosuresData, refetch: DisclosuresRefetch } = useQuery(
    ["Disclosures"],
    () =>
      axios
        .get(`https://data.argaam.com/api/v1/json/ir-widget/disclosures-articles-with-body/${i18n.language}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );


  const { isLoading: eventsLoading, data: eventsData } = useQuery(
    ["Events"],
    () =>
      axios
        .get(`https://data.argaam.com/api/v1/json/ir-widget/events?recordSize=30`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { isLoading: LatestNewsLoading, data: LatestNewsData, refetch: LatestNewsRefetch } = useQuery(
    ["LatestNews"],
    () =>
      axios
        .get(`https://data.argaam.com/api/v1/json/ir-widget/latest-news-articles-with-body/${i18n.language}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    LatestNewsRefetch()
    DisclosuresRefetch()
    AnalystEstimatesRefetch()
  }, [i18n.language, LatestNewsRefetch, DisclosuresRefetch, AnalystEstimatesRefetch])
  if (LatestNewsLoading && eventsLoading && AnalystEstimatesLoading && DisclosuresLoading) {
    return <div><Loader /></div>;
  }

  return (
    <div className="disclosures-page">
      <ul className="nav nav-underline">
        <li className="nav-item">

          <NavLink
            to={{
              pathname: "/disclosures/main-sec",
              search: `${window.location.search}`,
            }}
            className="nav-link"
          >
            {i18n.language === "en" ? "Disclosures" : "الافصاحات"}
          </NavLink>

        </li>

        <li className="nav-item">

          <NavLink
            to={{
              pathname: "/disclosures/news",
              search: `${window.location.search}`,
            }}
            className="nav-link"          >
            {i18n.language === "en" ? "LatestNews" : "أحدث الأخبار"}
          </NavLink>

        </li>
        <li className="nav-item">

          <NavLink
            to={{
              pathname: "/disclosures/events",
              search: `${window.location.search}`,
            }}
            className="nav-link"          >
            {i18n.language === "en" ? "Calendar Events" : "المفكرة"}            </NavLink>

        </li>

        <li className="nav-item">

          <NavLink
            to={{
              pathname: "/disclosures/analyst-estimates",
              search: `${window.location.search}`,
            }}
            className="nav-link"          >
            {i18n.language === "en" ? "Analyst Estimates" : "اراء و توقعات المحللين"}</NavLink>

        </li>

      </ul>

      <Outlet context={{ disclosuresData, LatestNewsData, AnalystEstimatesData, eventsData }} />    </div>
  );
}

export default DisclosuresPage;
