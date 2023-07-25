import React from "react";
import "./MilestonesSec.css";
import moment from "moment/moment";
import { useOutletContext } from "react-router";
import { useTranslation } from "react-i18next";
function MilestonesSec() {
  const { i18n } = useTranslation();
  const d = useOutletContext()?.data?.milestones;
  return (
    <div className="my-5 milestones">
      <h4>{i18n.language === "en" ? "Milestones" : "التطورات الرئيسية"}</h4>

      <hr />
      {d?.map((mileston, index) => {
        return (
          <div className="row mt-2" key={index}>
            <div className="col-md-3">
              <p>{moment(mileston?.fullDate)?.format("DD/MM/YYYY")}</p>
            </div>
            <div className="col-md-9">
              <p>
                {i18n.language === "en" ? mileston?.titleEn : mileston?.titleAr}
              </p>
            </div>
            <br />
            <br />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default MilestonesSec;
