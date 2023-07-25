import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { isNegative } from "../../../Services/services";
import Loader from "../../GlobalComps/Loader/Loader";
import "./FinancialHighlightsSec.css";

function FinancialHighlightsSec() {
  const { i18n } = useTranslation();

  const [curr, setCurrency] = useState("sar");

  const { isLoading, isError, data } = useQuery(["financialHighlights"], () =>
    axios
      .get(
        "https://data.argaam.com/api/v1.0/json/ir-widget/financial-highlights",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => res.data)
  );

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>...Error</div>;
  }

  return (
    <div className="financial-highlights">
      <div className="d-flex justify-content-between align-items-center mt-5 mb-0">
        <h4>Financial Ratios(M SAR)</h4>
        <div className="my-2 pills-tabs">
          <span>
            {/* <h5>{i18n.language === "en" ? "Currency" : "العملة"}</h5> */}
            <button
              className="btn btn-outline-dark btn-sm px-3 border-1"
              id="usd-currency"
              onClick={(e) => {
                setCurrency("usd");
                document.getElementById("usd-currency").classList.add("active");
                document
                  .getElementById("sar-currency")
                  .classList.remove("active");
              }}
            >
              {i18n.language === "en" ? "USD" : "دولار"}
            </button>
          </span>

          <span>
            <button
              id="sar-currency"
              className="btn btn-outline-dark btn-sm px-3 border-1 active"
              onClick={(e) => {
                setCurrency("sar");
                document.getElementById("sar-currency").classList.add("active");
                document
                  .getElementById("usd-currency")
                  .classList.remove("active");
              }}
            >
              {i18n.language === "en" ? "SAR" : "ريال"}
            </button>
          </span>
        </div>
      </div>
      <hr />
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                {i18n.language === "en" ? "Description" : "وصف"}
              </th>
              <th scope="col">2020</th>
              <th scope="col">2019</th>
              <th scope="col">2018</th>
              <th scope="col">2017</th>
              <th scope="col">2016</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((highlight, index) => {
              return (
                <tr key={index}>
                  <th scope="row">
                    {i18n.language === "en"
                      ? highlight?.DisplayNameEn
                      : highlight?.DisplayNameAr}
                  </th>
                  <td>
                    {curr === "sar"
                      ? isNegative(highlight[2022])
                      : isNegative(highlight[2022] / 3.76)}
                  </td>
                  <td>
                    {curr === "sar"
                      ? isNegative(highlight[2021])
                      : isNegative(highlight[2021] / 3.76)}
                  </td>
                  <td>
                    {curr === "sar"
                      ? isNegative(highlight[2020])
                      : isNegative(highlight[2020] / 3.76)}
                  </td>
                  <td>
                    {curr === "sar"
                      ? isNegative(highlight[2019])
                      : isNegative(highlight[2019] / 3.76)}
                  </td>
                  <td>
                    {curr === "sar"
                      ? isNegative(highlight[2018])
                      : isNegative(highlight[2018] / 3.76)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FinancialHighlightsSec;
