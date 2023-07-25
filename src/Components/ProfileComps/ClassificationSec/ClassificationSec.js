import React from "react";
import { useTranslation } from "react-i18next";
function ClassificationSec() {
  const { i18n } = useTranslation();
  return (
    <div className="classification">
      <h4>{i18n.language === "en" ? "Classification" : "تصنيف"}</h4>
      <hr />
      <p>{i18n.language === "en" ? "ConsumerGoods" : "بضائع المستهلكين"}</p>
      <br />
      <p>
        {i18n.language === "en" ? "Hotels And Tourism" : "الفنادق و السياحه"}
      </p>
    </div>
  );
}

export default ClassificationSec;
