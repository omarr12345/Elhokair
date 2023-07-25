import React from "react";
import "./NegotiatedDealMainComp.css";
import axios from "axios";
import moment from "moment";
import { useQuery } from "react-query";
import "./NegotiatedDealMainComp.css";
import { formatter, isNegative } from "../../../Services/services";
import { useTranslation } from "react-i18next";
import Loader from "../../GlobalComps/Loader/Loader";
function NegotiatedDealsMainComp() {
  const { i18n } = useTranslation();

  //Fetching
  const { isLoading, isError, data } = useQuery(["NegDeals"], () =>
    axios
      .get(`https://data.argaam.com/api/v1/json/ir-widget/negotiated-deals`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => res.data)
  );

  //reFetch

  if (isLoading) {
    return <div><Loader /></div>;
  }
  if (isError) {
    return <div>...Error</div>;
  }
  return (
    <div className="negotiated-deals-maincomp">
      <h4 className="mt-5 mb-3">{i18n.language === "en" ? data.companyNameEn : data.companyNameAr}</h4>
      <hr />
      <div className="table-responsive py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">{i18n.language === "en" ? "Date" : "التاريخ"}</th>
              <th scope="col">{i18n.language === "en" ? "Market Price" : "سعر السهم"}</th>
              <th scope="col">{i18n.language === "en" ? "Negotiated Price" : "سعر الصفقه"}</th>
              <th scope="col">{i18n.language === "en" ? "Negotiated Market Price" : "(%) سعر الصفقة الي السهم"}</th>
              <th scope="col">{i18n.language === "en" ? "Volume Traded" : " قيمة الصفقة"}</th>
              <th scope="col">{i18n.language === "en" ? "Value Traded" : "كمية الصفقة"}</th>
            </tr>
          </thead>

          <tbody>
            {data.deals.map((deal, dealIndex) => {
              return (
                <tr key={dealIndex}>
                  <td className="ch-color">
                    {moment(deal.date).format("DD/MM/YYYY")}
                  </td>
                  <td>{formatter(deal.marketPrice)}</td>
                  <td>{formatter(deal.negotiatedPrice)}</td>
                  <td>{isNegative(deal.negotiatedToMarketprice)}</td>
                  <td>{formatter(deal.valueTraded)} </td>
                  <td>{formatter(deal.volumeTraded)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NegotiatedDealsMainComp;
