import React, { useState } from "react";
import "./HistoricalDividends.css";
import { useOutletContext } from "react-router";
import Colchart from "../../GlobalComps/Col-chart/Colchart";
import { BiNote } from "react-icons/bi";
import moment from "moment";
import { formatter } from "../../../Services/services";
import NotesModal from "../../GlobalComps/NotesModal/NotesModal";
import { useTranslation } from "react-i18next";
function HistoricalDividends() {
  const { i18n } = useTranslation();
  const data = useOutletContext()?.d2;
  const [current, setCurrent] = useState("");
  return (
    <div className="historical-dividends">
      <h4 className="mt-5">{i18n.language === "en" ? "Dividend History" : " التوزيعات النقدية"}</h4>
      <hr />
      <Colchart content_2={data?.dividendsChartData} />
      <br />
      <h4>{i18n.language === "en" ? "Dividend History" : " التوزيعات النقدية"}</h4>

      <div className="table-responsive">
        <table className="table fw-bold">
          <thead>
            <tr>
              <th scope="col">{i18n.language === "en" ? "Announcement" : "تاريخ الاعلان"}</th>
              <th scope="col">{i18n.language === "en" ? "Ex-dividened" : "تاريخ الاستحقاق"}</th>
              <th scope="col">{i18n.language === "en" ? "Dividend History" : "تاريخ التوزيع"}</th>
              <th scope="col">{i18n.language === "en" ? "Dividends (M Riyal)" : " إجمالي التوزيعات النقدية (مليون ريال)	"}</th>
              <th scope="col">{i18n.language === "en" ? "Dividends" : "التوزيع النقدي"}</th>
              <th scope="col">{i18n.language === "en" ? "Notes" : "الملاحظات"}</th>
            </tr>
          </thead>
          <tbody>
            {data?.capitalDividendHistory?.map(
              (capHistory, capHistoryIndex) => {
                return (
                  <tr key={capHistoryIndex}>
                    <td>
                      {moment(capHistory?.dividendAnnouncedDate).format(
                        "DD/MM/YYYY"
                      )}
                    </td>
                    <td>
                      {moment(capHistory?.dividendDueDate).format("DD/MM/YYYY")}
                    </td>
                    <td>
                      {moment(capHistory?.dividendDate).format("DD/MM/YYYY")}
                    </td>
                    <td>{capHistory?.cashDividend}</td>
                    <td>{formatter(capHistory?.cashDividendPerShare)}</td>
                    <td
                      onClick={() => setCurrent(capHistory)}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <BiNote className="notes-modal-icon" />
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>

      <NotesModal content={i18n.language === "en" ? current?.notesEn : current?.notesAr} />
    </div>
  );
}

export default HistoricalDividends;
