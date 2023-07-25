import React from "react";
import "./Profile.css";
import { useQuery } from "react-query";
import axios from "axios";
import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../Components/GlobalComps/Loader/Loader";
import instance from "../../Services/api";
import { useEffect } from "react";

function Profile() {
  const { i18n } = useTranslation();
  const { isLoading, isError, data } = useQuery(
    ["profileData"],
    () =>
      instance.get(`/api/v1.0/json/ir-api/profile`),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  );

  // const { isLoading, isError, data } = useQuery(
  //   ["d"],
  //   () =>
  //     axios
  //       .get(`https://data.argaam.com/api/v1.0/json/ir-api/profile`, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       })
  //       .then((res) => res.data),
  //   {
  //     refetchOnWindowFocus: false,
  //   }
  // );

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="profile-page">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <NavLink
            to={{
              pathname: "/profile/basic-info",
              search: `${window.location.search}`,
            }}
            className="nav-link"
          >
            {i18n.language === "en"
              ? "Basic Information"
              : "المعلومات الأساسيه"}{" "}
          </NavLink>
        </li>
        <hr />
        <li className="nav-item">
          <NavLink
            to={{
              pathname: "/profile/financial-highlights",
              search: `${window.location.search}`,
            }}
            className="nav-link"
          >
            {i18n.language === "en"
              ? "Financial Highlights"
              : "المؤشرات المالية"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={{
              pathname: "/profile/trading-data",
              search: `${window.location.search}`,
            }}
            className="nav-link"
          >
            {i18n.language === "en" ? "Trading Data" : "بيانات التداول"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={{
              pathname: "/profile/stock-info",
              search: `${window.location.search}`,
            }}
            className="nav-link"
          >
            {i18n.language === "en" ? "Stock Information" : "معلومات الأسهم"}
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to={{
              pathname: "/profile/subdiaries",
              search: `${window.location.search}`,
            }}
            className="nav-link"
          >
            {i18n.language === "en"
              ? "Subdiaries and Associates"
              : "الشركات التابعة والزميلة"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={{
              pathname: "/profile/milestones",
              search: `${window.location.search}`,
            }}
            className="nav-link"
          >
            {i18n.language === "en" ? "Milestones" : " المعالم"}
          </NavLink>
        </li>
      </ul>
      <Outlet context={{ data }} />
    </div>
  );
}

export default Profile;
