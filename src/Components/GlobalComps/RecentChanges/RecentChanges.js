import React from "react";
import moment from "moment/moment";
import { useOutletContext } from "react-router";
import { useTranslation } from "react-i18next";
function RecentChanges(props) {
  const { i18n } = useTranslation();

  const recentChanges = useOutletContext()?.d2?.capitalChanges;

  return (
    <div className="recent-changes">
      <h4 className="mt-5">
        {i18n.language === "en" ? "Recent Changes" : "التغييرات الأخيرة"}
      </h4>
      <hr />
      <div className="d-flex justify-content-between my-2 p-1">
        <div>
          {i18n.language === "en" ? "Previous Capital" : "رأس المال السابق"}
        </div>
        <div>
          {props?.content?.currentCapital || recentChanges?.currentCapital}
        </div>
      </div>
      <div className="d-flex justify-content-between my-2 p-1">
        <div>
          {i18n.language === "en"
            ? "Previous Num Of Shares(M)"
            : "عدد الأسهم قبل التغير (مليون)"}
        </div>
        <div>
          {props?.content?.currentShares || recentChanges?.currentShares}
        </div>
      </div>
      <div className="d-flex justify-content-between my-2 p-1">
        <div> {i18n.language === "en" ? "Capital Change" : "نسبة التغيير"}</div>
        <div>{props?.content?.bonusShares || recentChanges?.bonusShares}%</div>
      </div>
      <div className="d-flex justify-content-between my-2 p-1">
        <div>
          {" "}
          {i18n.language === "en"
            ? "Current Capital M(SAR)"
            : "رأس المال بعد التغير (مليون ريال)"}
        </div>
        <div>{props?.content?.newCapital || recentChanges?.newCapital}</div>
      </div>
      <div className="d-flex justify-content-between my-2 p-1">
        <div>
          {i18n.language === "en"
            ? "Current Number Of Shares M(SAR)"
            : "عدد الأسهم بعد التغير (مليون)"}
        </div>
        <div>{props?.content?.newShares || recentChanges?.newShares}</div>
      </div>
      <div className="d-flex justify-content-between my-2 p-1">
        <div>{i18n.language === "en" ? "Type" : "النوع"}</div>
        <div>
          {props?.content?.companyCapitalStatusNameEn ||
            recentChanges?.companyCapitalStatusNameEn}
        </div>
      </div>
      <div className="d-flex justify-content-between my-2 p-1">
        <div>{i18n.language === "en" ? "Announcement" : "تاريخ الإعلان"}</div>
        <div>
          {moment(
            props?.content?.announcedDate || recentChanges?.announcedDate
          ).format("DD/MM/YYYY")}
        </div>
      </div>
    </div>
  );
}

export default RecentChanges;
