import React from "react";
import "./AnalystCoverageAccordion.css";
import { isNegative } from "../../../Services/services";
import moment from "moment";
import { useTranslation } from "react-i18next";
function AnalystCoverageAccordion(props) {
  const { i18n } = useTranslation();
  return (
    <div className="analyst-coverage-accordion">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr className="fw-bold">
                <td className="w-25">
                  {i18n.language === "en" ? "Details" : "تفاصيل"}
                </td>
                <td>
                  {i18n.language === "en" ? "Million SAR" : "مليون ريال "}
                </td>
                <td>
                  {i18n.language === "en" ? "Million SAR" : "مليون ريال "}
                </td>
                <td>
                  {i18n.language === "en" ? "Million SAR" : "مليون ريال "}
                </td>
                <td>
                  {i18n.language === "en" ? "Million SAR" : "مليون ريال "}
                </td>
                <td>
                  {i18n.language === "en" ? "Million SAR" : "مليون ريال "}
                </td>
              </tr>
              <tr>
                <td></td>
                {props?.content?.tabs[0]?.fieldsValues[0]?.periodValues
                  ?.reverse()
                  ?.map((periodVal, periodValIndex) => {
                    return (
                      <td key={periodValIndex}>
                        {props.type === "year"
                          ? periodVal?.forYear
                          : moment(periodVal?.forDate)?.format("DD/MM/yyyy")}
                      </td>
                    );
                  })}
              </tr>

              <tr>
                <td className="w-25 mx-5">
                  {i18n.language === "en" ? "No Of Analysts" : "عدد المحللين:"}
                </td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </thead>
            {props.content?.tabs?.map((tab, tabIndex) => {
              return (
                <tbody key={tabIndex} className="accordion" id={tabIndex}>
                  <tr key={tabIndex} className="fw-bold accordion-item">
                    <td colSpan={7}>
                      <button
                        className="text-bg-light accordion-button close-sign fw-bold collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#flush-collapse-" + tabIndex}
                        aria-expanded="false"
                        aria-controls={"flush-collapse-" + tabIndex}
                        fdprocessedid="jue0ff"
                      >
                        <span className="mx-5">
                          {i18n.language === "en"
                            ? tab?.fsFieldCategoryNameEn
                            : tab?.fsFieldCategoryNameAr}
                        </span>
                      </button>
                    </td>
                  </tr>

                  {tab?.fieldsValues?.map((t, keyValueIndex) => {
                    return (
                      <tr
                        key={keyValueIndex}
                        id={"flush-collapse-" + tabIndex}
                        className={
                          tabIndex === 0
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        data-bs-parent="#accordionFlushExample"
                        data-mdb-toggle="animation"
                        data-mdb-animation-reset="true"
                        data-mdb-animation="slide-out-right"
                      >
                        <td>
                          {i18n.language === "en"
                            ? t?.fsFieldNameEn
                            : t?.fsFieldNameAr}
                        </td>
                        {t?.periodValues?.map((periodVal, periodValIndex) => {
                          return (
                            <React.Fragment key={periodValIndex}>
                              <td key={periodValIndex}>
                                {isNegative(periodVal?.actualValue)}
                              </td>
                            </React.Fragment>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default AnalystCoverageAccordion;
