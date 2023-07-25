import Highcharts from "highcharts";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { isNegative } from "../../../Services/services";
import { ChartModal } from "../../GlobalComps/ChartModal/ChartModal";
import "./BusinessSegmentsAccordion.css";

function BusinessSegmentsAccordion(props) {
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
          ? detailsModal?.businessSegmentNameEn
          : detailsModal?.businessSegmentNameAr,
    },

    series: [
      {
        name: "",
        data: [
          props?.currency === "sar"
            ? Number(detailsModal?.periodicValues[0]?.value)
            : Number(detailsModal?.periodicValues[0]?.value / 3.76),

          props?.currency === "sar"
            ? Number(detailsModal?.periodicValues[1]?.value)
            : Number(detailsModal?.periodicValues[1]?.value / 3.76),

          props?.currency === "sar"
            ? Number(detailsModal?.periodicValues[2]?.value)
            : Number(detailsModal?.periodicValues[2]?.value / 3.76),

          props?.currency === "sar"
            ? Number(detailsModal?.periodicValues[3]?.value)
            : Number(detailsModal?.periodicValues[3]?.value / 3.76),

          props?.currency === "sar"
            ? Number(detailsModal?.periodicValues[4]?.value)
            : Number(detailsModal?.periodicValues[4]?.value / 3.76),
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
        detailsModal?.periodicValues[0]?.forDate,
        detailsModal?.periodicValues[1]?.forDate,
        detailsModal?.periodicValues[2]?.forDate,
        detailsModal?.periodicValues[3]?.forDate,
        detailsModal?.periodicValues[4]?.forDate,
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
    <div
      className="accordion accordion-flush business-segments-accordion"
      id="accordionFlushExample"
    >
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
              {props.type === "year"
                ? props?.content[0]?.businessSegments[0]?.periodicValues
                  ?.slice(0, 5)
                  ?.map((x, xIndex) => {
                    return <td key={xIndex}>{x?.forDate}</td>;
                  })
                : props?.content[0]?.businessSegments[0]?.periodicValues
                  ?.slice(0, 5)
                  ?.map((x, xIndex) => {
                    return <td key={xIndex}>{x?.forDate}</td>;
                  })}
            </tr>
          </thead>
          {props?.content?.map((r, rIndex) => {
            return (
              <tbody key={rIndex} className="accordion" id={rIndex}>
                <tr key={rIndex} className="fw-bold accordion-item text-bg-light">
                  <td colSpan={7}>
                    <button
                      className="text-bg-light accordion-button close-sign fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#flush-collapse-" + rIndex}
                      aria-expanded="false"
                      aria-controls={"flush-collapse-" + rIndex}
                      fdprocessedid="jue0ff"
                    >
                      <span className="mx-5">{i18n.language === "en"
                        ? r?.fsFieldNameEn
                        : r?.fsFieldNameAr}</span>
                    </button>
                  </td>
                </tr>

                {r?.businessSegments?.map((bs, bsIndex) => {
                  return (
                    <tr
                      key={bsIndex}
                      id={"flush-collapse-" + rIndex}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                      data-mdb-toggle="animation"
                      data-mdb-animation-reset="true"
                      data-mdb-animation="slide-out-right"
                    >
                      <td>
                        {i18n.language === "en"
                          ? bs.businessSegmentNameEn
                          : bs.businessSegmentNameAr}
                      </td>
                      <td
                        onClick={() => setDetailsModal(bs)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <img
                          src={require("../../../Assets/chart-icon.png")}
                          alt="chart-icon"
                        />
                      </td>
                      <td>
                        {isNegative(Number(bs.periodicValues[0].value)) || "--"}
                      </td>
                      <td>
                        {isNegative(Number(bs.periodicValues[1].value)) || "--"}
                      </td>
                      <td>
                        {isNegative(Number(bs.periodicValues[2].value)) || "--"}
                      </td>
                      <td>
                        {isNegative(Number(bs.periodicValues[3].value)) || "--"}
                      </td>
                      <td>
                        {isNegative(Number(bs.periodicValues[4].value)) || "--"}
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

export default BusinessSegmentsAccordion;
