import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "./Colchart.css";

import { useTranslation } from "react-i18next";

function Colchart(props) {
  const { i18n } = useTranslation();

  const options = {
    chart: {
      type: "column",
      backgroundColor: props.color,
    },
    title: {
      text: "",
    },
    series: [
      {
        name: "",
        data: [
          {
            name:
              props?.content?.[9]?.FinancialYear ||
              props?.content_2?.[19]?.FinancialYear,
            y:
              props?.content?.[9]?.Capital ||
              props?.content_2?.[19]?.CashDividend,
          },
          {
            name:
              props?.content?.[10]?.FinancialYear ||
              props?.content_2?.[18]?.FinancialYear,
            y:
              props?.content?.[10]?.Capital ||
              props?.content_2?.[18]?.CashDividend,
          },
          {
            name:
              props?.content?.[11]?.FinancialYear ||
              props?.content_2?.[17]?.FinancialYear,
            y:
              props?.content?.[10]?.Capital ||
              props?.content_2?.[17]?.CashDividend,
          },
          {
            name:
              props?.content?.[13]?.FinancialYear ||
              props?.content_2?.[16]?.FinancialYear,
            y:
              props?.content?.[13]?.Capital ||
              props?.content_2?.[16]?.CashDividend,
          },
          {
            name:
              props?.content?.[14]?.FinancialYear ||
              props?.content_2?.[15]?.FinancialYear,
            y:
              props?.content?.[14]?.Capital ||
              props?.content_2?.[15]?.CashDividend,
          },
        ],
        tooltip: {
          valueDecimals: 2,
          animation: 1500,
        },
        animation: true,
        color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1,
          },
          stops: [
            [0, "rgb(43, 213, 102)"],
            [1, "rgb(3, 136, 205)"],
          ],
        },
      },
    ],
    legend: {
      enabled: false,
    },
    xAxis: {
      categories: [
        props?.content?.[9]?.FinancialYear,
        props?.content?.[10]?.FinancialYear,
        props?.content?.[11]?.FinancialYear,
        props?.content?.[13]?.FinancialYear,
        props?.content?.[14]?.FinancialYear,
      ],

      reversed:
        i18n.language === "en" || i18n.language === "en-US" ? false : true,
    },
    credits: {
      enabled: false,
    },
    yAxis: {
      title: {
        text: "",
      },

      opposite:
        i18n.language === "en" || i18n.language === "en-US" ? false : true,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
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
    <div className="">
      <div style={{ position: "relative" }}>
        <div className="closing d-none" id="close">
          <img
            className="close-img"
            src={require("../../../Assets/close.png")}
            onClick={() => {
              document.getElementById("donut").classList.add("d-none");
              document.getElementById("close").classList.add("d-none");
            }}
            alt="close"
          />
        </div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default Colchart;
