import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { formatter, isNegativePercentage } from "../../../Services/services";
import Loader from "../../../Components/GlobalComps/Loader/Loader";

function Opinions() {
  const { i18n } = useTranslation();
  const { isLoading, isError, data } = useQuery(
    "OpinionsData",
    () =>
      axios
        .get(
          `https://data.argaam.com/api/v1.0/json/ir-widget/analyst-opinions`,
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

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>...Error</div>;
  }
  return (
    <div className="opinions my-5">
      <h4 className="mb-3">
        {i18n.language === "en" ? "Analyst Recommendations" : "توصيات المحللين"}
      </h4>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="fw-bold">
              <td className="w-25">
                {i18n.language === "en" ? "Date" : "التاريخ"}
              </td>
              <td>
                {i18n.language === "en" ? "Research firm" : "شركة الأبحاث"}
              </td>
              <td>
                {i18n.language === "en" ? "Prev Rating" : "التقييم الماضي"}
              </td>
              <td>{i18n.language === "en" ? "Rating" : "التقييم الحالي"}</td>
              <td>
                {i18n.language === "en" ? "Current Price" : "السعر الحالي"}
              </td>
              <td>
                {i18n.language === "en" ? "Target Price" : "السعر المطلوب"}
              </td>
              <td>{i18n.language === "en" ? "Change" : "التغيير"}</td>
              <td>{i18n.language === "en" ? "Downloads" : "المرفقات"}</td>
            </tr>
          </thead>

          <tbody>
            {data?.analystOpinions?.map((opinion, index) => {
              return (
                <tr key={index}>
                  <td>{moment(opinion?.forDate).format("DD/MM/YYYY")}</td>
                  <td>
                    {i18n.language === "en"
                      ? opinion?.brokerNameEn
                      : opinion?.brokerNameAr}
                  </td>
                  <td>
                    {i18n.language === "en"
                      ? opinion?.previousOpinionEn
                      : opinion?.previousOpinionAr}
                  </td>

                  <td>
                    {i18n.language === "en"
                      ? opinion?.currentOpinionEn
                      : opinion?.currentOpinionAr}
                  </td>

                  <td>{formatter(opinion?.currentPrice)}</td>

                  <td>{formatter(opinion?.targetPrice)}</td>
                  <td>{isNegativePercentage(opinion?.change)}</td>
                  <td className="text-center">
                    <a
                      href={
                        i18n.language === "en"
                          ? opinion?.attachLinkURLEn
                          : opinion?.attachLinkURLAr
                      }
                      download
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={require("../../../Assets/pdf-icon.png")}
                        alt="pdf-icon"
                      />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Opinions;
