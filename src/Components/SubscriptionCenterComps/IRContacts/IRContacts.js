import React from "react";
import "./IRContacts.css";
import { useTranslation } from "react-i18next";

function IRContacts() {
      const { i18n } = useTranslation();

      return (
            <div className="ir-contacts mb-5">
                  <h4>IR Contacts</h4>
                  <hr />
                  <div className="d-flex flex-row my-2 mt-3">
                        <div className="w-25">

                              <p>{i18n.language === "en"
                                    ? "Website"
                                    : "الموقع"}:</p>
                        </div>

                        <div>
                              <p>www.alhokair.com</p>
                        </div>
                  </div>

                  <div className="d-flex flex-row my-2">
                        <div className="w-25">
                              <p>{i18n.language === "en"
                                    ? "Email"
                                    : "البريد الالكتروني:"}</p>
                        </div>

                        <div>
                              <p>IR@alhokair.com</p>
                        </div>
                  </div>
                  <div className="d-flex flex-row my-2">
                        <div className="w-25">
                              <p>{i18n.language === "en"
                                    ? "Phone:"
                                    : "رقم الهاتف:"}</p>
                        </div>

                        <div>
                              <p>+966114134444</p>
                        </div>
                  </div>
                  <div className="d-flex flex-row my-2">
                        <div className="w-25">
                              <p>{i18n.language === "en"
                                    ? "Fax:"
                                    : "فاكس:"}</p>
                        </div>

                        <div>
                              <p>+966114131111</p>
                        </div>
                  </div>
                  <div className="d-flex flex-row my-2 flex-wrap">
                        <div className="w-25">
                              <p>{i18n.language === "en"
                                    ? "Address:"
                                    : "العنوان:"}</p>
                        </div>

                        <div className="w-75">
                              <p>Al Murooj District - Northen Ring Road between exit 4 and exit 5 after Hilton Double Tree - Riyadh 11584
                              </p>
                        </div>
                  </div>
                  <div className="d-flex flex-row my-2">
                        <div className="w-25">
                              <p>{i18n.language === "en"
                                    ? "P.O BOX:"
                                    : "صندوق البريد:"}</p>
                        </div>

                        <div>
                              <p>57750</p>
                        </div>
                  </div>
            </div>
      );
}

export default IRContacts;
