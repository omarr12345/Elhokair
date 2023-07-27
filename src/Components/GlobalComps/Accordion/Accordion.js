import "./Accordion.css";
import { isNegative } from "../../../Services/services";
import moment from "moment/moment";
import Highcharts from "highcharts";
import { useState } from "react";
import { ChartModal } from "../ChartModal/ChartModal";
import React from "react";
import { useTranslation } from "react-i18next";

function Accordion(props) {
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
          ? detailsModal?.displayNameEn
          : detailsModal?.displayNameAr,
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
          ? detailsModal?.values[0]?.forYear
          : moment(detailsModal?.values[0]?.forDate).format("DD/MM/YYYY"),
        props?.type === "year"
          ? detailsModal?.values[1]?.forYear
          : moment(detailsModal?.values[1]?.forDate).format("DD/MM/YYYY"),
        props?.type === "year"
          ? detailsModal?.values[2]?.forYear
          : moment(detailsModal?.values[2]?.forDate).format("DD/MM/YYYY"),
        props?.type === "year"
          ? detailsModal?.values[3]?.forYear
          : moment(detailsModal?.values[3]?.forDate).format("DD/MM/YYYY"),
        props?.type === "year"
          ? detailsModal?.values[4]?.forYear
          : moment(detailsModal?.values[4]?.forDate).format("DD/MM/YYYY"),
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
    <div>
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
              <td></td>
              <td></td>
              <td>
                {props.type === "quarter"
                  ? moment(
                    props.content?.tabs[0]?.fields[0]?.values[0]?.forDate
                  ).format("DD/MM/yyyy")
                  : props.content?.tabs[0]?.fields[0]?.values[0]?.forYear}
              </td>
              <td>
                {props.type === "quarter"
                  ? moment(
                    props.content?.tabs[0]?.fields[0]?.values[1]?.forDate
                  ).format("DD/MM/yyyy")
                  : props.content?.tabs[0]?.fields[0]?.values[1]?.forYear}
              </td>
              <td>
                {props.type === "quarter"
                  ? moment(
                    props.content?.tabs[0]?.fields[0]?.values[2]?.forDate
                  ).format("DD/MM/yyyy")
                  : props.content?.tabs[0]?.fields[0]?.values[2]?.forYear}
              </td>
              <td>
                {props.type === "quarter"
                  ? moment(
                    props.content?.tabs[0]?.fields[0]?.values[3]?.forDate
                  ).format("DD/MM/yyyy")
                  : props.content?.tabs[0]?.fields[0]?.values[3]?.forYear}
              </td>
              <td>
                {props.type === "quarter"
                  ? moment(
                    props.content?.tabs[0]?.fields[0]?.values[4]?.forDate
                  ).format("DD/MM/yyyy")
                  : props.content?.tabs[0]?.fields[0]?.values[4]?.forYear}
              </td>
            </tr>
          </thead>

          {props.content?.tabs?.map((tab, tabIndex) => {
            return (
              <tbody key={tabIndex} className="accordion" id={tabIndex}>
                <tr key={tabIndex} className="fw-bold accordion-item text-bg-light">
                  <td colSpan={7} className="text-bg-light">
                    <button
                      className="text-bg-light border-0 fw-bold accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#flush-collapse-" + tabIndex}
                      aria-expanded="false"
                      aria-controls={"flush-collapse-" + tabIndex}
                      fdprocessedid="jue0ff"
                    >
                      <span className="mx-5">{i18n.language === "en" ? tab.tabNameEn : tab.tabNameAr}</span>
                    </button>
                  </td>
                </tr>
                {tab?.fields?.map((t, tIndex) => {
                  return (
                    <tr
                      key={tIndex}
                      id={"flush-collapse-" + tabIndex}
                      className={tabIndex === 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
                      data-bs-parent="#accordionFlushExample"
                      data-mdb-toggle="animation"
                      data-mdb-animation-reset="true"
                      data-mdb-animation="slide-out-right"
                    >
                      <td>
                        {i18n.language === "en"
                          ? t.displayNameEn
                          : t.displayNameAr}
                      </td>
                      <td
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => setDetailsModal(t)}
                      >
                        <img
                          src={require("../../../Assets/chart-icon.png")}
                          alt="chart-icon"
                        />
                      </td>
                      <td>
                        {props.currency === "sar"
                          ? isNegative(t.values[0].value) || "--"
                          : isNegative(t.values[0].value / 3.76) || "--"}
                      </td>
                      <td>
                        {props.currency === "sar"
                          ? isNegative(t.values[1].value) || "--"
                          : isNegative(t.values[1].value / 3.76) || "--"}
                      </td>
                      <td>
                        {props.currency === "sar"
                          ? isNegative(t.values[2].value) || "--"
                          : isNegative(t.values[2].value / 3.76) || "--"}
                      </td>
                      <td>
                        {props.currency === "sar"
                          ? isNegative(t.values[3].value) || "--"
                          : isNegative(t.values[3].value / 3.76) || "--"}
                      </td>
                      <td>
                        {props.currency === "sar"
                          ? isNegative(t.values[4].value) || "--"
                          : isNegative(t.values[4].value / 3.76) || "--"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            );
          })}
        </table>
      </div>

      {/* Modal */}
      <ChartModal Highcharts={Highcharts} options={options} />
      {/* Modal */}
    </div>
  );
}

export default Accordion;
