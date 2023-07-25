import React, { useState } from "react";
import "./Events.css";
import { useOutletContext } from "react-router";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { AiOutlineDownCircle } from "react-icons/ai";
import NotesModal from "../../GlobalComps/NotesModal/NotesModal";

function Events() {
  const [current, setCurrent] = useState();
  const { i18n } = useTranslation();
  const data = useOutletContext()?.eventsData;
  return (
    <div className="events ">
      <h4 className="mt-5 ">
        {i18n.language === "en" ? "Calendar" : "المفكرة"}
      </h4>
      <hr />

      <div className="table-responsive mt-3">
        <table className="table">
          <thead>
            <tr>
              <th colSpan={2}>{i18n.language === "en" ? "Date" : "التاريخ"}</th>
              <th colSpan={2}>{i18n.language === "en" ? "Event" : "الحدث"}</th>
              <th>{i18n.language === "en" ? "Theme" : "نوع الحدث"}</th>
              <th>{i18n.language === "en" ? "Company" : "الشركة"}</th>
              <th>{i18n.language === "en" ? "Venue" : "الموقع"}</th>
              <th>{i18n.language === "en" ? "Details" : "التفاصيل"}</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((calendar, calendarIndex) => {
              return (
                <tr key={calendarIndex}>
                  <td colSpan={2}>
                    {moment(calendar?.occursOn)?.format("DD-MM-YYYY")}
                  </td>
                  <td colSpan={2}>
                    {i18n.language === "en"
                      ? calendar?.titleEn
                      : calendar?.titleAr}
                  </td>
                  <td>
                    {i18n.language === "en"
                      ? calendar?.typeNameEn
                      : calendar?.typeNameAr}
                  </td>
                  <td>
                    {i18n.language === "en"
                      ? calendar?.companyNameEn
                      : calendar?.companyNameAr}
                  </td>
                  <td>
                    {i18n.language === "en"
                      ? calendar?.eventLocationEn || "--"
                      : calendar?.eventLocationAr || "--"}
                  </td>
                  <td>
                    <AiOutlineDownCircle
                      onClick={() => {
                        i18n.language === "en"
                          ? setCurrent(calendar?.descriptionEn)
                          : setCurrent(calendar?.descriptionAr);
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="notes-modal-icon"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <NotesModal content_4={current} />
    </div>
  );
}

export default Events;
