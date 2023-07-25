import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { useQuery } from "react-query";
import { useState } from "react";
import axios from "axios";
import "./YearsChart.css";
import { useTranslation } from "react-i18next";
import Loader from "../../GlobalComps/Loader/Loader";
function YearsChart() {
  const { i18n } = useTranslation();
  const { isLoading, isError, data } = useQuery(["chartData"], () =>
    axios
      .get("https://data.argaam.com/api/v1/json/ir-api/charts-data/0/5Y", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => res.data.data), {
    refetchOnWindowFocus: false
  }
  );

  const [chartType, setChartType] = useState("areaspline");
  let ohlc = [];
  let volume = [];
  let dataLength = data?.length;
  let i = 1;

  for (i; i < dataLength; i += 1) {
    ohlc.push([
      new Date(String(data[i]["date"].replace(" ", "T"))).getTime(), // the date
      data[i]["open"], // open
      data[i]["high"], // high
      data[i]["low"], // low
      data[i]["close"], // close
    ]);

    volume.push([
      new Date(String(data[i]["date"].replace(" ", "T"))).getTime(), // the date
      data[i]["volume"], // the volume
    ]);
  }

  // Charts Options
  const options = {
    accessibility: { enabled: false },

    chart: {
      backgroundColor: "transparent",
    },

    yAxis: [
      {
        labels: {
          align: "left",
        },
        height: "80%",
        resize: {
          enabled: true,
        },
      },
      {
        labels: {
          align: "left",
        },
        top: "80%",
        height: "20%",
        offset: 0,
      },
    ],

    series: [
      {
        data: ohlc,
        type: chartType,
        name: "El Hokair",
        color: "#89accc",
        animation: true,
      },
      {
        data: volume,
        type: "column",
        name: "El Hokair Volume",
        yAxis: 1,
        color: "#89accc",
        animation: true,
      },
    ],

    tooltip: {
      shape: "square",
      headerShape: "callout",
      borderWidth: 0,
      valueDecimals: 2,
      shadow: false,
      positioner: function (width, height, point) {
        var chart = this.chart,
          position;

        if (point.isHeader) {
          position = {
            x: Math.max(
              // Left side limit
              chart.plotLeft,
              Math.min(
                point.plotX + chart.plotLeft - width / 2,
                // Right side limit
                chart.chartWidth - width - chart.marginRight
              )
            ),
            y: point.plotY,
          };
        } else {
          position = {
            x: point.series.chart.plotLeft,
            y: point.series.yAxis.top - chart.plotTop,
          };
        }

        return position;
      },
    },
    credits: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 800,
          },
          chartOptions: {
            rangeSelector: {
              inputEnabled: false,
            },
          },
        },
      ],
    },
  };

  const handleChartType = (e) => {
    setChartType(e.target.value);
  };

  if (isLoading) {
    return <div><Loader /></div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <>
      <div className="shape-input">
        <span>
          <select onChange={handleChartType}>
            <option value="area">Area</option>
            <option value="line">Line</option>
            <option value="ohlc">OHLC</option>
            <option value="spline">Spline</option>
            <option value="areaspline">Area Spline</option>
          </select>
        </span>
      </div>
      <h4>{i18n.language === "en" ? "El Hokair Group For Tourism And Development" : "شركة مجموعة عبدالمحسن الحكير للسياحة والتنمية (مجموعة الحكير ) "}</h4>
      <hr />
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </>
  );
}

export default YearsChart;
