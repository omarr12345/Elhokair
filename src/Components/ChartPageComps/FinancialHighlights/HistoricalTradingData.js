import React, { useEffect, useState } from "react";
// ** Import Use Translation
import axios from "axios";
import moment from "moment";
import "./HistoricalTradingData.css";
import { useQuery } from "react-query";
import dayjs from "dayjs";
import { isNegative } from "../../../Services/services";
import { useTranslation } from "react-i18next";
import Loader from "../../GlobalComps/Loader/Loader";
import { DatePicker } from "antd";

function HistoricalTradingData() {
  const { RangePicker } = DatePicker;
  const { i18n } = useTranslation();
  const lastTenDays = new Date(new Date().setDate(new Date().getDate() - 10));
  const [startEndDate, setstartEndDate] = useState([
    moment(lastTenDays)?.format("YYYY-MM-DD"),
    moment().format("YYYY-MM-DD"),
  ]);

  //Fetching
  const { isLoading, isError, data, refetch } = useQuery(
    ["HistoricalData"],
    () =>
      axios
        .get(
          `https://data.argaam.com/api/v1/json/ir-api/chart-data-table/${startEndDate[0]}/${startEndDate[1]}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => res.data.chartsData),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    refetch();
  }, [startEndDate, refetch]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <>
      <RangePicker
        defaultValue={[dayjs(startEndDate[0]), dayjs(startEndDate[1])]}
        disabledDate={(currentDate) => currentDate.isAfter(moment())}
        allowClear={false}
        autoFocus={false}
        mode={() => "data"}
        size="middle"
        popupClassName="range-picker-pop"
        onChange={(dateValue) => {
          setstartEndDate(
            dateValue?.map((item) => moment(item?.$d).format("YYYY-MM-DD"))
          );
        }}
      />

      {/* Table To Be Filtered */}

      <hr />

      <div className="table-responsive py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">{i18n.language === "en" ? "Date" : "التاريخ"}</th>
              <th scope="col">{i18n.language === "en" ? "Price" : "السعر"}</th>
              <th scope="col">
                {i18n.language === "en" ? "Change" : "التغيير"}
              </th>
              <th scope="col">
                {i18n.language === "en" ? "Change(%)" : "التغيير(%)"}
              </th>
              <th scope="col">{i18n.language === "en" ? "Volume" : "الحجم"}</th>
              <th scope="col">
                {i18n.language === "en" ? "TurnOver" : "التضخم"}
              </th>
              <th scope="col">
                {i18n.language === "en" ? "Open" : "الافتتاح"}
              </th>
              <th scope="col">{i18n.language === "en" ? "High" : "أعلي"}</th>
              <th scope="col">{i18n.language === "en" ? "Low" : "أدني"}</th>
            </tr>
          </thead>

          <tbody>
            {data.reverse().map((h, idx) => {
              return (
                <tr key={idx}>
                  <td className="ch-color">
                    {moment(h.forDate).format("DD/MM/YYYY")}
                  </td>
                  <td>{isNegative(Number(h.close)) || "-"}</td>
                  <td>{isNegative(Number(h.change)) || "-"}</td>
                  <td>{isNegative(Number(h.percentageChange)) || "-"}</td>
                  <td>
                    {h.volume.toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td>
                    {h.amount.toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td>{isNegative(Number(h.open)) || "-"}</td>
                  <td>{isNegative(Number(h.max)) || "-"}</td>
                  <td>{isNegative(Number(h.min)) || "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default HistoricalTradingData;
