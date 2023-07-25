import React from "react";
import "./SubscriptionCenterMainComp.css";
import { useTranslation } from "react-i18next";

function SubscriptionCenterMainComp() {
      const { i18n } = useTranslation();

      return (
            <div className="subscription-center-main-comp">
                  <div className="intro">
                        <h4>
                              {i18n.language === "en" ? "Subscription Center" : "مركز الاشتراك"}
                        </h4>
                        <hr />
                        <p className="mt-3">
                              {" "}
                              {i18n.language === "en"
                                    ? "Keep Updated With email Subscription"
                                    : "ابقي علي اطلاع"}
                        </p>
                        <p>
                              {i18n.language === "en"
                                    ? "Subscripe to receive news and financial information at your email"
                                    : "اشترك ليصلك كل جديد عن طريق البريد الالكتروني"}
                        </p>
                  </div>
                  <div className="subscription-form my-3">
                        <form className="row">
                              <div className="col-md-6 my-2">
                                    <input type="text" placeholder={i18n.language === "en"
                                          ? "Email"
                                          : "البريد الالكتروني"} className="w-100 p-2" />
                              </div>
                              <div className="col-md-6 my-2">
                                    <input type="text" placeholder={i18n.language === "en"
                                          ? "Name"
                                          : "الاسم"} className="w-100 p-2" />
                              </div>
                              <div className="col-md-6 my-2">
                                    <input type="text" placeholder={i18n.language === "en"
                                          ? "FirstName"
                                          : "الاسم الاول"} className="w-100 p-2" />
                              </div>
                              <div className="col-md-6 my-2">
                                    <input type="text" placeholder={i18n.language === "en"
                                          ? "LastName"
                                          : "اسم العائلة"} className="w-100 p-2" />
                              </div>
                              <div className="col-md-6 my-2">
                                    <input type="text" placeholder={i18n.language === "en"
                                          ? "Company"
                                          : "الشركة"} className="w-100 p-2" />
                              </div>
                              <div className="col-md-6 my-2">
                                    <input type="text" placeholder={i18n.language === "en"
                                          ? "Country"
                                          : "الدولة"} className="w-100 p-2" />
                              </div>
                              <div className="col-md-12 my-3">

                                    {i18n.language === "en"
                                          ? "What would do you like to receive? "
                                          : "ماذا تريد أن يصلك؟"}
                              </div>

                              <div className="col-md-6 d-flex flex-row align-items-center my-2">
                                    <input type="checkbox" className="larger mx-2" />
                                    <label>
                                          {i18n.language === "en" ? "Calendar Events" : "المفكرة"}
                                    </label>
                              </div>
                              <div className="col-md-6 d-flex flex-row align-items-center my-2">
                                    <input type="checkbox" className="larger mx-2" />
                                    <label>
                                          {i18n.language === "en"
                                                ? "Annual Reports"
                                                : "التقارير السنوية"}
                                    </label>
                              </div>
                              <div className="col-md-6 d-flex flex-row align-items-center my-2">
                                    <input type="checkbox" className="larger mx-2" />
                                    <label> {i18n.language === "en"
                                          ? "Quarterly Results"
                                          : "نتائج ريع سنويه"}</label>
                              </div>
                              <div className="col-md-6 d-flex flex-row align-items-center my-2">
                                    <input type="checkbox" className="larger mx-2" />
                                    <label>AGM</label>
                              </div>

                              <hr />

                              <div className="d-flex flex-row align-items-center form-btns">
                                    <button className="cancel-btn">{i18n.language === "en"
                                          ? "Cancel"
                                          : "الغاء"}</button>
                                    <button className="submit-btn">{i18n.language === "en"
                                          ? "Subscribe"
                                          : "اشتراك"}</button>
                              </div>
                        </form>
                  </div>
            </div>
      );
}

export default SubscriptionCenterMainComp;
