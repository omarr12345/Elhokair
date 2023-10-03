import React from "react";
import { useTranslation } from "react-i18next";
const BusinessSec = (props) => {
  const { i18n } = useTranslation();
  return (
    <div className="my-5">
      <h4 className="mb-3">
        {i18n.language === "en" ? "Overview" : "نظرة عامة"}
      </h4>

      <div
        dangerouslySetInnerHTML={{ __html: props.content }}
        className="html-converted-txt"
      />
    </div>
  );
};

export default BusinessSec;
