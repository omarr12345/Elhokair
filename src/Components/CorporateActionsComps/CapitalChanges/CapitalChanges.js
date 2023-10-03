import React from "react";
import Colchart from "../../GlobalComps/Col-chart/Colchart";
import moment from "moment";
import { isNegativePercentage } from "../../../Services/services";
import { BiNote } from "react-icons/bi";
import { AiOutlineLink } from "react-icons/ai";
import { useState } from "react";
import NotesModal from "../../GlobalComps/NotesModal/NotesModal";
import { useOutletContext } from "react-router";
import { useTranslation } from "react-i18next";
function CapitalChanges() {
  const { i18n } = useTranslation();
  const [current, setCurrent] = useState();
  const data = useOutletContext()?.d2;
  return (
    <div className="capital-changes">
      <h4 className="mt-5">
        {i18n.language === "en" ? "Capital Changes" : "تغييرات رأس المال"}
      </h4>
      <hr />
      <Colchart content={data?.capitalChartData} />
      <h4 className="mb-3">
        {i18n.language === "en" ? "Capital Changes" : "تغييرات رأس المال"}
      </h4>
      <hr />
      <div className="table-responsive">
        <table className="table fw-bold">
          <thead>
            <tr>
              <th scope="col">{i18n.language === "en" ? "Date" : "التاريخ"}</th>
              <th scope="col">{i18n.language === "en" ? "Type" : "النوع"}</th>
              <th
                scope="col"
                colSpan={2}
                className="text-center"
                style={{ borderRight: "solid 1px", borderBottom: "solid 1px" }}
              >
                {i18n.language === "en" ? "Before" : "قبل"}
              </th>
              <th
                scope="col"
                colSpan={2}
                className="text-center"
                style={{ borderLeft: "solid 1px", borderBottom: "solid 1px" }}
              >
                {i18n.language === "en" ? "After" : "بعد"}
              </th>
              <th scope="col">
                {" "}
                {i18n.language === "en" ? "Change%" : "التغيير%"}
              </th>
              <th scope="col">
                {i18n.language === "en" ? "Notes" : "الملاحظات"}
              </th>
              <th scope="col">{i18n.language === "en" ? "Link" : "الرابط"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td className="text-center" style={{ borderBottom: "solid 1px" }}>
                {i18n.language === "en"
                  ? " Capital(M RIYAL)"
                  : "(ريال) رأس المال"}
              </td>
              <td
                className="text-center"
                style={{ borderRight: "solid 1px", borderBottom: "solid 1px" }}
              >
                {i18n.language === "en" ? "Shares(M)" : "عدد الأسهم (مليون)"}
              </td>
              <td
                className="text-center"
                style={{ borderLeft: "solid 1px", borderBottom: "solid 1px" }}
              >
                {i18n.language === "en"
                  ? " Capital(M RIYAL)"
                  : "(ريال) رأس المال"}
              </td>
              <td className="text-center" style={{ borderBottom: "solid 1px" }}>
                {i18n.language === "en" ? "Shares(M)" : "عدد الأسهم (مليون)"}
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            {data?.capitalChangeHistory?.map((capChange, capChangeIndex) => {
              return (
                <tr key={capChangeIndex}>
                  <td>{moment(capChange?.tableDate).format("DD/MM/YYYY")}</td>
                  <td>
                    {i18n.language === "en"
                      ? capChange?.typeEn
                      : capChange?.typeAr}
                  </td>
                  <td className="text-center">{capChange?.currentCapital}</td>
                  <td className="text-center">{capChange?.currentShares}</td>
                  <td className="text-center">{capChange?.newCapital}</td>
                  <td className="text-center">{capChange?.newShares}</td>
                  <td className="text-center">
                    {isNegativePercentage(
                      ((capChange?.currentCapital - capChange?.newCapital) /
                        capChange?.currentCapital) *
                        100
                    )}
                  </td>
                  <td
                    className="text-center"
                    onClick={() => setCurrent(capChange)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <BiNote className="notes-modal-icon" />
                  </td>
                  <td className="text-center">
                    <a
                      href={
                        i18n.language === "en"
                          ? capChange?.conditionalLinkEn
                          : capChange?.conditionalLinkAr
                      }
                    >
                      <AiOutlineLink />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <NotesModal
        content={i18n.language === "en" ? current?.notesEn : current?.notesAr}
      />
    </div>
  );
}

export default CapitalChanges;
