import React from "react";
import "./CorporateActions.css";
import { useQuery } from "react-query";
import axios from "axios";
import RecentChanges from "../../GlobalComps/RecentChanges/RecentChanges";
import RecentDividends from "../../GlobalComps/RecentDividends/RecentDividends";
import { useTranslation } from "react-i18next";
import Loader from "../../GlobalComps/Loader/Loader";
function CorporateActions() {
  const { i18n } = useTranslation();
  const { isLoading, isError, data } = useQuery(
    "corporate-actions",
    () =>
      axios
        .get("https://data.argaam.com/api/v1.0/json/ir-api/overview/en", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
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
    return <div>Error</div>;
  }

  return (
    <div className="corporate-actions my-5">
      <RecentChanges content={data?.cpaitalSummary} />
      <RecentDividends content={data?.dividandInfo} />
    </div>
  );
}

export default CorporateActions;
