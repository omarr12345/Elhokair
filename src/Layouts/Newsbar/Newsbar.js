import React, { useEffect } from "react";
import "./Newsbar.css";
import { useQuery } from "react-query";
import axios from "axios";
import { isNegative } from "../../Services/services";
import { useTranslation } from "react-i18next";
import Loader from "../../Components/GlobalComps/Loader/Loader";
import moment from "moment";
function Newsbar() {
  const { i18n } = useTranslation();
  const { isLoading, isError, data, refetch } = useQuery(
    ["NewsBar"],
    () =>
      axios
        .get(
          `https://data.argaam.com/api/v1.0/json/ir-widget/footer-ticker/${i18n.language}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    refetch();
  }, [refetch, i18n.language]);

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
    <div className="newsbar fixed-bottom bottom-0 fw-bold">
      <ul id={i18n.language === "en" ? "scroll-text" : "scroll-text-ar"}>
        <li>
          <p className="m-0">
            <span>
              {data?.price?.openValue > 0 ? (
                <img
                  src={require("../../Assets/Eo_circle_green_arrow-up.svg.png")}
                  style={{ height: "20px", width: "20px" }}
                  alt="up-icon"
                />
              ) : (
                <img
                  src={require("../../Assets/Eo_circle_red_arrow-down.svg.png")}
                  style={{ height: "20px", width: "20px" }}
                  alt="red-icon"
                />
              )}
            </span>
            <span className="mx-2">
              {i18n.language === "en" ? "Price :" : "السعر:"}{" "}
            </span>
            <span className="mx-2">{isNegative(data?.price?.openValue)}</span>
          </p>
        </li>
        <li>
          <p className="m-0">
            {data?.price?.high > 0 ? (
              <img
                src={require("../../Assets/Eo_circle_green_arrow-up.svg.png")}
                style={{ height: "20px", width: "20px" }}
                alt="up-icon"
              />
            ) : (
              <img
                src={require("../../Assets/Eo_circle_red_arrow-down.svg.png")}
                style={{ height: "20px", width: "20px" }}
                alt="down-icon"
              />
            )}
            <span className="mx-2">
              {i18n.language === "en" ? "High :" : "أعلي:"}{" "}
            </span>
            <span className="mx-2"> {isNegative(data?.price?.high)}</span>
          </p>
        </li>
        <li>
          <p className="m-0">
            {data?.price?.low > 0 ? (
              <img
                src={require("../../Assets/Eo_circle_green_arrow-up.svg.png")}
                style={{ height: "20px", width: "20px" }}
                alt="up-icon"
              />
            ) : (
              <img
                src={require("../../Assets/Eo_circle_red_arrow-down.svg.png")}
                style={{ height: "20px", width: "20px" }}
                alt="down-icon"
              />
            )}
            <span className="mx-2">
              {i18n.language === "en" ? "Low :" : "أدني:"}
            </span>
            <span className="mx-2">{isNegative(data?.price?.low)}</span>
          </p>
        </li>
        <li>
          <p className="m-0 d-flex flex-row justify-content-between align-items-center">
            {data?.price?.change > 0 ? (
              <img
                src={require("../../Assets/Eo_circle_green_arrow-up.svg.png")}
                style={{ height: "20px", width: "20px" }}
                alt="up-icon"
              />
            ) : (
              <img
                src={require("../../Assets/Eo_circle_red_arrow-down.svg.png")}
                style={{ height: "20px", width: "20px" }}
                alt="down-icon"
              />
            )}
            <span className="mx-2">
              {i18n.language === "en" ? "Change :" : "التغير:"}{" "}
            </span>
            <span className="mx-2">{isNegative(data?.price?.change)}</span>
          </p>
        </li>
        <li>
          <p className="m-0 d-flex flex-row justify-content-between align-items-center">
            <span className="mx-2">
              {i18n.language === "en" ? "Change(%) :" : "(%)التغير:"}{" "}
            </span>
            <span className="mx-2">
              {isNegative(data?.price?.percentageChange)}
            </span>
          </p>
        </li>
        <li>
          <p className="m-0 d-flex flex-row justify-content-between align-items-center">
            <span className="mx-2">
              {i18n.language === "en" ? "Turmover :" : "التضخم:"}
            </span>
            <span className="mx-2">{isNegative(data?.price?.amount)}</span>
          </p>
        </li>
        <li>
          <p className="m-0">
            <span className="mx-2">
              {i18n.language === "en" ? "Latest News :" : "أحدث الأخبار:"}{" "}
            </span>
            <span className="mx-2">{data?.news?.title}</span>
          </p>
        </li>
        <li>
          <p className="m-0">
            <span className="mx-2">
              {i18n.language === "en" ? "Calendar Event :" : "المفكرة:"}{" "}
            </span>
            <span className="mx-2">
              {i18n.language === "en"
                ? data?.calendarEvent?.titleEn
                : data?.calendarEvent?.titleAr}
            </span>
            <span className="mx-2">
              {moment(data?.calendarEvent?.occursOn).format("DD/MM/YYYY")}
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Newsbar;
