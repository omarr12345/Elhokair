import React, { useEffect } from "react";
import "./BasicInfoSec.css";
import BusinessSec from "../BusinessSec/BusinessSec";
import { useOutletContext } from "react-router";
import ClassificationSec from "../ClassificationSec/ClassificationSec";
import { useTranslation } from "react-i18next";

function BasicInfoSec() {
  const { i18n } = useTranslation();
  const d = useOutletContext()?.data?.profileInfo;

  return (
    <div className="basic-info">
      <h4 className="mt-5 mb-3">Business</h4>
      <div
        dangerouslySetInnerHTML={{ __html: i18n.language === "en" ? d?.overviewEn : d?.overviewAr }}
        className="html-converted-txt"
      />
      <BusinessSec
        content={i18n.language === "en" ? d?.summaryEn : d?.summaryAr}
      />
      <div className="row">
        <div className="col-md-4 col-12">
          <h4>
            {i18n.language === "en" ? "Basic Info" : "المعلومات الأساسيه"}
          </h4>
          <hr />
          <div className="col-md-12 d-flex justify-content-between my-2">
            <div>{i18n.language === "en" ? "City" : "المدينه"}</div>
            <div>{i18n.language === "en" ? d?.cityNameEn : d?.cityNameAr}</div>
          </div>
          <div className="col-md-12 d-flex justify-content-between my-2">
            <div>
              {i18n.language === "en" ? "Website" : "الموقع الالكتروني"}
            </div>
            <div>{d?.websiteURL}</div>
          </div>
          <div className="col-md-12 d-flex justify-content-between my-2">
            <div>{i18n.language === "en" ? "Email" : "الايميل"}</div>
            <div>{d?.email}</div>
          </div>
          <div className="col-md-12 d-flex justify-content-between my-2">
            <div>{i18n.language === "en" ? "Phone" : "الهاتف"}</div>
            <div>{d?.phone}</div>
          </div>
          <div className="col-md-12 d-flex justify-content-between my-2">
            <div>{i18n.language === "en" ? "Fax" : "فاكس"}</div>
            <div>{d?.fax}</div>
          </div>
          <div className="col-md-12 d-flex justify-content-between my-2">
            <div>{i18n.language === "en" ? "P.O Box" : "صندوق البريد"}</div>
            <div>{i18n.language === "en" ? d?.boxEn : d?.boxAr}</div>
          </div>
          <div className="col-md-12 d-flex justify-content-between my-2">
            <div>{i18n.language === "en" ? "Address" : "العنوان"}</div>
            <div className="w-50">
              {i18n.language === "en" ? d?.addressEn : d?.addressAr}
            </div>
          </div>
        </div>
        <div className="col-md-8 col-12 mb-5">
          <ClassificationSec />
        </div>
      </div>
    </div>
  );
}

export default BasicInfoSec;
