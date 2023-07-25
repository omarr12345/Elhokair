import React from "react";
import "./HistoricalChanges.css";
import { useQuery } from "react-query";
import axios from "axios";
import moment from "moment";
import { isNegative } from "../../../Services/services";
import { useTranslation } from "react-i18next";
import Loader from "../../GlobalComps/Loader/Loader";
function HistoricalChanges() {
  const { i18n } = useTranslation();

  const { isLoading, isError, data } = useQuery(["shareholder-history"], () =>
    axios
      .get(
        "https://data.argaam.com/api/v1.0/json/ir-widget/shareholders-history",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => res.data)
  );
  if (isLoading) {
    return <div><Loader /></div>;
  }

  if (isError) {
    return <div>is Error</div>;
  }
  return (
    <div className="historical-changes my-5">
      <h4>{i18n.language === "en" ? "Historical Changes" : "التطورات التاريخيه"}</h4>
      <hr />

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">{i18n.language === "en" ? "Date" : "التاريخ"}</th>
              <th scope="col">{i18n.language === "en" ? "Shareholder" : "المالك"}</th>
              <th scope="col"> {i18n.language === "en" ? "Prev.Holding" : "نسبة الملكية السابقة"}</th>
              <th scope="col">{i18n.language === "en" ? "Curr.Holding" : "نسبة الملكية الحالية"}</th>
              <th scope="col">{i18n.language === "en" ? "Change%" : "%التغيير"}</th>
              <th scope="col">{i18n.language === "en" ? "Notes" : "الملاحظات"}</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((hChange, hChangeIndex) => {
              return (
                <tr key={hChangeIndex}>
                  <td> {moment(hChange.forDate).format("DD/MM/YYYY")}</td>
                  <td>{i18n.language === "en" ? hChange.shareholderNameEn : hChange.shareholderNameAr}</td>
                  <td>{hChange.previousPercentage || "--"}</td>
                  <td>
                    {hChange.percentage < 5 ? (
                      <p style={{ color: "red" }}>{i18n.language === "en" ? "Less Than 5%" : "أقل من %5"}</p>
                    ) : (
                      hChange.percentage
                    )}
                  </td>
                  <td>{isNegative(hChange.percentageChange) || "--"}</td>
                  <td>{hChange.notesEn || "--"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HistoricalChanges;
