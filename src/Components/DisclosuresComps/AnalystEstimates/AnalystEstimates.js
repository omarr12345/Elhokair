import React from "react";
import "./AnalystEstimates.css";
import { useOutletContext } from "react-router";
import moment from "moment";
import { useTranslation } from "react-i18next";

function AnalystEstimates() {
  const { i18n } = useTranslation();
  const data = useOutletContext()?.AnalystEstimatesData?.analystEstimates;

  return (
    <div className="my-5">
      <h4>{i18n.language === "en" ? "Analyst Estimates" : "اراء و توقعات المحللين"}</h4>
      <hr />

      <hr className="mt-5" />

      <div className="row">
        {data?.map((d, dIndex) => {
          return (
            <div key={dIndex} className="my-2 col-md-12 row">
              <div className="col-md-4">
                {moment(d?.publishedOn, "DD-MM-YYYY[T]HH:mm:ss").format(
                  "DD/MM/YYYY"
                )}
              </div>
              <div className="col-md-8">{d?.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnalystEstimates;
