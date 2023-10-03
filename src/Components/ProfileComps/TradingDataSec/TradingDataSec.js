import { formatter } from "../../../Services/services";
import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
const TradingDataSec = (props) => {
  const { i18n } = useTranslation();
  const d = useOutletContext()?.data?.tradingData;

  return (
    <div className="my-5 trading-data">
      <h4>{i18n.language === "en" ? "Trading Data" : "بيانات التداول"}</h4>
      <hr />
      <div className="d-flex justify-content-between">
        <p className="fw-bold">
          {i18n.language === "en" ? "Trading Data" : "بيانات التداول"}
        </p>
        <p>{i18n.language === "en" ? d?.marketNameEn : d?.marketNameAr}</p>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <p className="fw-bold">
          {" "}
          {i18n.language === "en" ? "Fiscal Year End" : "نهاية السنة المالية:"}
        </p>
        <p>December</p>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <p className="fw-bold">
          {i18n.language === "en" ? "Free Float (M):" : "الأسهم الحره:"}
        </p>
        <p>{d?.freeFloatShareValue}</p>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <p className="fw-bold">
          {i18n.language === "en" ? "Weight in Index %:" : "وزن الشركة % :"}
        </p>
        <p>{formatter(d?.companyWeight)}</p>
      </div>
      <br />

      <div className="d-flex justify-content-between">
        <p className="fw-bold">
          {i18n.language === "en"
            ? "3M Average Transactions:"
            : "متوسط عدد الصفقات اليومية - آخر 3 أشهر :"}
        </p>
        <p>{formatter(d?.avgTransactions3Months)}</p>
      </div>
      <br />

      <div className="d-flex justify-content-between">
        <p className="fw-bold">
          {i18n.language === "en"
            ? "3M Average Volume:"
            : "متوسط حجم التداول (سهم) لآخر 3 أشهر :"}
        </p>
        <p>{formatter(d?.avgVolume3Months)}</p>
      </div>
      <br />
    </div>
  );
};

export default TradingDataSec;
