import React from "react";
import moment from "moment";
import { useOutletContext } from "react-router";
import { useTranslation } from "react-i18next";
function RecentDividends(props) {
  const { i18n } = useTranslation();

  const recentDividends = useOutletContext()?.d2?.recentDividends;
  return (
    <div className="Recent-dividends">
      <h4 className="mt-5">
        {i18n.language === "en" ? "Recent Dividends" : "أحدث التوزيعات النقدية"}
      </h4>
      <hr />
      <div className="d-flex justify-content-between my-2 p-1">
        <div>
          {i18n.language === "en" ? "Capital M(SAR)" : "رأس المال (مليون ريال)"}
        </div>
        <div>{props?.content?.capital || recentDividends?.capital}</div>
      </div>
      <div className="d-flex justify-content-between my-2 p-1">
        <div>{i18n.language === "en" ? "Shares(M)" : "عدد الأسهم (مليون)"}</div>
        <div>
          {props?.content?.numberOfShares || recentDividends?.numberOfShares}
        </div>
      </div>
      <div className="d-flex justify-content-between my-2 p-1">
        <div>
          {i18n.language === "en" ? "Cash/Dividends(M)" : "النسبة من رأس المال"}
        </div>
        <div>
          {props?.content?.dividendPercentage ||
            recentDividends?.dividendPercentage}
          %
        </div>
      </div>
      <div className="d-flex justify-content-between my-2 p-1">
        <div>
          {i18n.language === "en"
            ? "Cash Dividend (M) "
            : "توزيعات أرباح نقدية"}
        </div>
        <div>
          {props?.content?.cashDividend || recentDividends?.cashDividend}
        </div>
      </div>
      <div className="d-flex justify-content-between my-2 p-1">
        <div>
          {" "}
          {i18n.language === "en" ? "Dividend Policy " : " سياسة توزيع الأرباح"}
        </div>
        <div>
          {props?.content?.dividendPolicy || recentDividends?.dividendPolicy}
        </div>
      </div>
      <div className="d-flex justify-content-between my-2 p-1">
        <div>{i18n.language === "en" ? "Type " : "النوع"}</div>
        <div>
          {props?.content?.companyDividendStatusNameEn ||
            recentDividends?.companyDividendStatusNameEn}
        </div>
      </div>
      <div className="d-flex justify-content-between my-2 p-1">
        <div>{i18n.language === "en" ? "Announcement " : "تاريخ الاعلان"}</div>
        <div>
          {moment(
            props?.content?.dividendAnnouncedDate ||
              recentDividends?.dividendAnnouncedDate
          ).format("DD/MM/YYYY")}
        </div>
      </div>
    </div>
  );
}

export default RecentDividends;
