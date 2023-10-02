import "./InvestorPresentationsMainComp.css";
import React, { useState } from "react";
// ** Import Use Translation
import axios from "axios";
import moment from "moment";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
import Loader from "../GlobalComps/Loader/Loader";
import { DatePicker } from "antd";
import dayjs from "dayjs";

function InvestorPresentationsMainComp() {
  const { i18n } = useTranslation();
  const { RangePicker } = DatePicker;
  const lastTenDays = new Date(new Date().setDate(new Date().getDate() - 10));
  const [startEndDate, setstartEndDate] = useState([
    "01-01-2019",
    "01-01-2023",
  ]);
  const [reportId, setReportId] = useState(5);
  const { isLoading, isError, data, refetch } = useQuery(
    ["investorPresentationData"],
    () =>
      axios
        .get(
          `https://data.argaam.com/api/v1.0/json/ir-widget/investors-presentations?reportTypeID=${reportId}&dateFrom=${startEndDate[0]}&dateTo=${startEndDate[1]}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => res.data),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>... is Error</div>;
  }

  return (
    <>
      <h4 className="my-5">
        {i18n.language === "en" ? "Investor Presentation" : "عرض المستثمرين"}
      </h4>

      <div className="investor-presentations-filter d-flex flex-wrap align-items-center pt-2 pb-2 px-2 justify-content-between my-3">
        <div className="d-flex flex-row flex-wrap align-items-center date-range-cont justify-content-evenly">
          <div>
            <p style={{ color: "white" }} className="mx-2">
              {i18n.language === "en" ? "Date" : "التاريخ"}
            </p>
          </div>
          <div>
            <div></div>
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
                  dateValue?.map((item) =>
                    moment(item?.$d).format("YYYY-MM-DD")
                  )
                );
              }}
            />
          </div>
        </div>

        <div className="text-center">
          <select onChange={(e) => setReportId(e.currentTarget.value)}>
            <option value="1">
              {i18n.language === "en" ? "Earnings Call" : "تقرير الأداء"}
            </option>
            <option value="2">
              {i18n.language === "en" ? "Annual Report" : "تقرير سنوي"}
            </option>
            <option value="3">
              {i18n.language === "en" ? "Corporate Guides" : "لوائح و أدلة"}
            </option>
            <option value="4">
              {i18n.language === "en"
                ? "Minutes Of General Meeting"
                : "محضر جمعيه عموميه"}
            </option>
            <option value="5">
              {i18n.language === "en"
                ? "Articles Of Association"
                : "النظام الأساسي"}
            </option>
            <option value="6">
              {i18n.language === "en" ? "Others" : "أخري"}
            </option>
            <option value="7">
              {" "}
              {i18n.language === "en"
                ? "Real Estate Valuation Report"
                : "تقرير الثمن العقاري"}
            </option>
            <option value="8">
              {i18n.language === "en" ? "Coverage Reports" : "تغطية التقارير"}
            </option>
            <option value="9">
              {i18n.language === "en"
                ? "Investor Presentation"
                : "الاصدارات و التقارير الاستثماريه"}
            </option>
            <option value="10">
              {i18n.language === "en"
                ? "Earnings Call Script"
                : "سيناريو مكالمات الأرباح"}
            </option>
          </select>
        </div>

        <div className="text-center">
          <button className="btn btn-primary" onClick={() => refetch()}>
            {i18n.language === "en" ? "Search" : "ابحث"}
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">{i18n.language === "en" ? "Date" : "التاريخ"}</th>
              <th scope="col">
                {i18n.language === "en" ? "Report" : "التقرير"}
              </th>
              <th scope="col">
                {i18n.language === "en" ? "Report Type" : "نوع التقرير"}
              </th>
              <th scope="col">
                {i18n.language === "en" ? "Downloads" : " تحميل "}
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.investorsPresentations?.map(
              (investorPresentation, investorPresentationIndex) => {
                return (
                  <tr key={investorPresentationIndex}>
                    <td>
                      {moment(investorPresentation.createdOn).format(
                        "DD/MM/YYYY"
                      )}
                    </td>
                    <td>
                      {i18n.language === "en"
                        ? investorPresentation.descriptionEn
                        : investorPresentation.descriptionAr}
                    </td>
                    <td>
                      {i18n.language === "en"
                        ? investorPresentation.typeNameEn
                        : investorPresentation.typeNameAr}
                    </td>
                    <td>
                      <a
                        href={investorPresentation.attachLinkUrlEn}
                        download
                        target="_blank"
                        className="btn btn-sm m-1"
                        style={{
                          backgroundColor: "rgb(0, 104, 179)",
                          color: "white",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                        rel="noreferrer"
                      >
                        En
                      </a>
                      <a
                        href={investorPresentation.attachLinkUrlAr}
                        download
                        target="_blank"
                        className="btn btn-sm m-1"
                        style={{
                          backgroundColor: "rgb(0, 104, 179)",
                          color: "white",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                        rel="noreferrer"
                      >
                        Ar
                      </a>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InvestorPresentationsMainComp;
