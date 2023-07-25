import React from "react";
import "./ForeignOwnership.css";
import { useQuery } from "react-query";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Loader from "../../GlobalComps/Loader/Loader";
function ForeginOwnership() {
  const { i18n } = useTranslation();
  const { isLoading, isError, data } = useQuery(["foreignOwnership"], () =>
    axios
      .get("https://data.argaam.com/api/v1.0/json/ir-api/major-shareholders/", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => res.data)
  );

  if (isLoading) {
    return (
      <div>
        {" "}
        <Loader />
      </div>
    );
  }
  if (isError) {
    return <div> is Error</div>;
  }

  return (
    <div className="foreign-ownership">
      <h4 className="mt-5 mb-3">
        {" "}
        {i18n.language === "en" ? "Major Shareholders" : "كبار المساهمين"}
      </h4>
      <hr />

      {/* MajorShareholder Table */}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                {i18n.language === "en" ? "Shareholders" : " المساهمين"}
              </th>
              <th scope="col">{i18n.language === "en" ? "Type" : "النوع"}</th>
              <th scope="col">
                {i18n.language === "en" ? "No. Of Shares" : "عدد الأسهم"}
              </th>
              <th scope="col">
                {i18n.language === "en" ? "Holding" : "نسبة الملكيه "}
              </th>
              <th scope="col">
                {i18n.language === "en" ? "Market Value" : "القيمه السوقيه"}{" "}
              </th>
              <th scope="col">
                {i18n.language === "en" ? "Notes" : "الملاحظات"}
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.shareholders?.map((shareholder, shareholderIndex) => {
              return (
                <tr key={shareholderIndex}>
                  <td>
                    {i18n.language === "en"
                      ? shareholder.shareholderNameEn
                      : shareholder.shareholderNameAr}
                  </td>
                  <td>
                    {i18n.language === "en"
                      ? shareholder.shareholderTypeNameEn
                      : shareholder.shareholderTypeNameAr}
                  </td>
                  <td>{shareholder.noOfShares}</td>
                  <td>{shareholder.percentage}</td>
                  <td>{shareholder.marketValue}</td>
                  <td>
                    {i18n.language === "en"
                      ? shareholder.notesEn || "--"
                      : shareholder.notesAr || "--"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h4 className="my-5">
        {i18n.language === "en" ? "Foregin Ownership" : "ملكية الأجانب"}
      </h4>
      <hr />

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                {i18n.language === "en" ? "Company" : "الشركه"}
              </th>
              <th scope="col">
                {" "}
                {i18n.language === "en"
                  ? "TOTAL FOREIGN OWNERSHIP"
                  : "ملكيه جميع المستثمرين الأجانب "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td className="fw-bold">
                {i18n.language === "en" ? "Maximum Limit" : "الحد الاعلى"}
              </td>
              <td className="fw-bold">
                {i18n.language === "en" ? "Actual" : "الملكية الفعلية"}
              </td>
            </tr>
            {data?.foreignOwnerships?.map((ownership, ownershipIndex) => {
              return (
                <tr key={ownershipIndex}>
                  <td>
                    {i18n.language === "en"
                      ? ownership.companyNameEn
                      : ownership.companyNameAr}
                  </td>
                  <td>%{ownership.tfoMaximum}</td>
                  <td>%{ownership.tfoActual}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ForeginOwnership;
