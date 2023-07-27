import React, { useEffect } from "react";
import "./Newsbar.css";
import { useQuery } from "react-query";
import axios from "axios";
import { isNegative } from "../../Services/services";
import { useTranslation } from "react-i18next";
import Loader from "../../Components/GlobalComps/Loader/Loader";
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
    <div className="newsbar fixed-bottom bottom-0">
      <ul id={i18n.language === "en" ? "scroll-text" : "scroll-text-ar"}>
        <li>
          <p className="m-0">
            <span>{i18n.language === "en" ? "High :" : "أعلي:"} </span>
            <span> {isNegative(data?.price?.high)}</span>
          </p>
        </li>

        <li>
          <p className="m-0">
            <span>{i18n.language === "en" ? "Low :" : "أدني:"}</span>
            <span>{isNegative(data?.price?.low)}</span>
          </p>
        </li>

        <li>
          <p
            className="m-0 d-flex flex-row justify-content-between align-items-center"

          >
            <span>
              {i18n.language === "en" ? "Transactions :" : "عدد الصفقات:"}{" "}
            </span>
            <span>{isNegative(data?.price?.transactions)}</span>
          </p>
        </li>

        <li>
          <p
            className="m-0 d-flex flex-row justify-content-between align-items-center"

          >
            <span>{i18n.language === "en" ? "Turmover :" : "التضخم:"}</span>
            <span>{isNegative(data?.price?.amount)}</span>
          </p>
        </li>

        {/* News */}

        <li>
          <p className="m-0">
            <span>
              {i18n.language === "en" ? "Latest News :" : "أحدث الأخبار:"}{" "}
            </span>
            <span>{data?.news?.title}</span>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Newsbar;
