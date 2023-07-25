import { useOutletContext } from "react-router";
import { formatter } from "../../../Services/services";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const StockInfoSec = () => {
  const { i18n } = useTranslation();
  const d = useOutletContext()?.data?.stockInfo;
  return (
    <div className="my-5 stock-info">
      <div className="d-flex justify-content-between align-items-baseline">
        <div>
          <h4>
            {i18n.language === "en" ? "Stock Information" : "بيانات السهم"}
          </h4>
        </div>
        <div>
          <Link
            className="read-more"
            to={{
              pathname: "/financial-ratios",

              search: `${window.location.search}`,
            }}
          >
            {i18n.language === "en" ? "Read More" : "المزيد"}
            {i18n.language === "en" ? (
              <AiOutlineArrowRight />
            ) : (
              <AiOutlineArrowLeft />
            )}
          </Link>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between mt-3">
        <p className="fw-bold">
          {i18n.language === "en"
            ? "Shares Outstanding (M)"
            : "عدد الأسهم (مليون)"}
        </p>
        <p>{formatter(d?.numberOfShares)}</p>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <p className="fw-bold">
          {i18n.language === "en"
            ? "Par Value (Riyal)"
            : "القيمة الإسمية للسهم (ريال)"}
        </p>
        <p>{formatter(d?.nominalValue)}</p>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <p className="fw-bold">
          {i18n.language === "en"
            ? "Book Value(M)"
            : "القيمة الدفترية للسهم (ريال)"}
        </p>
        <p>{formatter(d?.bookValue)}</p>
      </div>
      <br />
      <div className="d-flex justify-content-between">
        <p className="fw-bold">
          {i18n.language === "en" ? "Market Cap(M)" : "القيمة السوقية (مليون)"}
        </p>
        <p>{formatter(d?.marketValue)}</p>
      </div>
      <br />
    </div>
  );
};

export default StockInfoSec;
