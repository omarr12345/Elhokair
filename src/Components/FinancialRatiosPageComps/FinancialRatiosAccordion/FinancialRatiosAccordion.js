import "./FinancialRatiosAccordion.css";
import { isNegative } from "../../../Services/services";
// import moment from "moment/moment";
import React from "react";
import { useState } from "react";
import moment from "moment";
import Highcharts from "highcharts";
import { ChartModal } from "../../GlobalComps/ChartModal/ChartModal";
import { useTranslation } from "react-i18next";

function FinancialRatiosAccordion(props) {
  const { i18n } = useTranslation();
  const [detailsModal, setDetailsModal] = useState(null);
  const options = {
    accessibility: { enabled: false },

    chart: {
      type: "column",
    },

    title: {
      text:
        i18n.language === "en"
          ? detailsModal?.displayNameEn || detailsModal?.nameEn
          : detailsModal?.displayNameAr || detailsModal?.nameAr,
    },

    series: [
      {
        name: "",
        data: [
          props?.currency === "sar" ||
            detailsModal?.nameEn === "Shares Outstanding (M)"
            ? Number(detailsModal?.values[0]?.value)
            : Number(detailsModal?.values[0]?.value / 3.76),

          props?.currency === "sar" ||
            detailsModal?.nameEn === "Shares Outstanding (M)"
            ? Number(detailsModal?.values[1]?.value)
            : Number(detailsModal?.values[1]?.value / 3.76),

          props?.currency === "sar" ||
            detailsModal?.nameEn === "Shares Outstanding (M)"
            ? Number(detailsModal?.values[2]?.value)
            : Number(detailsModal?.values[2]?.value / 3.76),

          props?.currency === "sar" ||
            detailsModal?.nameEn === "Shares Outstanding (M)"
            ? Number(detailsModal?.values[3]?.value)
            : Number(detailsModal?.values[3]?.value / 3.76),

          props?.currency === "sar" ||
            detailsModal?.nameEn === "Shares Outstanding (M)"
            ? Number(detailsModal?.values[4]?.value)
            : Number(detailsModal?.values[4]?.value / 3.76),
        ],

        color: "#0068b3",
        animation: true,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],

    legend: {
      enabled: false,
    },

    credits: {
      enabled: false,
    },

    yAxis: {
      title: {
        text: "",
      },
      gridLineWidth: 0,
      minorGridLineWidth: 0,
    },

    xAxis: {
      categories: [
        props?.type === "year"
          ? detailsModal?.values[0]?.year
          : detailsModal?.values[0]?.period,
        props?.type === "year"
          ? detailsModal?.values[1]?.year
          : detailsModal?.values[1]?.period,
        props?.type === "year"
          ? detailsModal?.values[2]?.year
          : detailsModal?.values[2]?.period,
        props?.type === "year"
          ? detailsModal?.values[3]?.year
          : detailsModal?.values[3]?.period,
        props?.type === "year"
          ? detailsModal?.values[4]?.year
          : detailsModal?.values[4]?.period,
      ],
    },

    responsive: {
      rules: [
        {
          condition: {
            width: 300,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="fw-bold">
              <td className="w-25">
                {i18n.language === "en" ? "Details" : "تفاصيل"}
              </td>
              <td>{i18n.language === "en" ? "Chart" : "الرسم البياني"}</td>
              <td>
                {props?.currency === "sar"
                  ? i18n.language === "en"
                    ? "Million SAR"
                    : "مليون ريال"
                  : i18n.language === "en"
                    ? "Million USD"
                    : "مليون دولار"}
              </td>
              <td>
                {props?.currency === "sar"
                  ? i18n.language === "en"
                    ? "Million SAR"
                    : "مليون ريال"
                  : i18n.language === "en"
                    ? "Million USD"
                    : "مليون دولار"}
              </td>
              <td>
                {props?.currency === "sar"
                  ? i18n.language === "en"
                    ? "Million SAR"
                    : "مليون ريال"
                  : i18n.language === "en"
                    ? "Million USD"
                    : "مليون دولار"}
              </td>
              <td>
                {props?.currency === "sar"
                  ? i18n.language === "en"
                    ? "Million SAR"
                    : "مليون ريال"
                  : i18n.language === "en"
                    ? "Million USD"
                    : "مليون دولار"}
              </td>
              <td>
                {props?.currency === "sar"
                  ? i18n.language === "en"
                    ? "Million SAR"
                    : "مليون ريال"
                  : i18n.language === "en"
                    ? "Million USD"
                    : "مليون دولار"}
              </td>
            </tr>
            <tr>
              <td className="w-25"></td>
              <td></td>
              {props?.type === "year"
                ? props?.content?.financialRatioFieldsGroups[0]?.financialRatioFieldsGroupFields[0]?.values
                  ?.slice(0, 5)
                  .map((d, dateIndex) => {
                    return <td key={dateIndex}>{d?.year}</td>;
                  })
                : props?.content?.financialRatioFieldsGroups[0]?.financialRatioFieldsGroupFields[0]?.values
                  ?.slice(0, 5)
                  .map((d, dateIndex) => {
                    return <td key={dateIndex}>{d?.period}</td>;
                  })}
            </tr>
          </thead>

          {props.content?.financialRatioFieldsGroups?.map((tab, tabIndex) => {
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
                      <span className="mx-5">{i18n.language === "en"
                        ? tab?.fieldGroupEn
                        : tab?.fieldGroupAr}</span>
                    </button>
                  </td>
                </tr>
                {tab?.financialRatioFieldsGroupFields?.map((t, tIndex) => {
                  return (
                    <tr
                      key={tIndex}
                      id={"flush-collapse-" + tabIndex}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                      data-mdb-toggle="animation"
                      data-mdb-animation-reset="true"
                      data-mdb-animation="slide-out-right"
                    >
                      <td>{i18n.language === "en" ? t?.nameEn : t?.nameAr}</td>
                      <td
                        onClick={() => setDetailsModal(t)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <img
                          src={require("../../../Assets/chart-icon.png")}
                          alt="chart-icon"
                        />
                      </td>
                      <td>
                        {props?.currency === "sar" ||
                          detailsModal?.nameEn === "Shares Outstanding (M)"
                          ? isNegative(Number(t.values[0].value)) || "--"
                          : isNegative(Number(t.values[0].value / 3.76)) ||
                          "--"}
                      </td>
                      <td>
                        {props?.currency === "sar" ||
                          detailsModal?.nameEn === "Shares Outstanding (M)"
                          ? isNegative(Number(t.values[1].value)) || "--"
                          : isNegative(Number(t.values[1].value / 3.76)) ||
                          "--"}
                      </td>
                      <td>
                        {props?.currency === "sar" ||
                          detailsModal?.nameEn === "Shares Outstanding (M)"
                          ? isNegative(Number(t.values[2].value)) || "--"
                          : isNegative(Number(t.values[2].value / 3.76)) ||
                          "--"}
                      </td>
                      <td>
                        {props?.currency === "sar" ||
                          detailsModal?.nameEn === "Shares Outstanding (M)"
                          ? isNegative(Number(t.values[3].value)) || "--"
                          : isNegative(Number(t.values[3].value / 3.76)) ||
                          "--"}
                      </td>
                      <td>
                        {props?.currency === "sar" ||
                          detailsModal?.nameEn === "Shares Outstanding (M)"
                          ? isNegative(Number(t.values[4].value)) || "--"
                          : isNegative(Number(t.values[4].value / 3.76)) ||
                          "--"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            );
          })}
        </table>
      </div>

      <ChartModal Highcharts={Highcharts} options={options} />
    </div>
  );
}

export default FinancialRatiosAccordion;
