import React from "react";
import "./DownloadIRApp.css";
import { AiFillApple } from "react-icons/ai";
import { useTranslation } from "react-i18next";
function DownloadIRApp() {
  const { i18n } = useTranslation();

  return (
    <div className="download-ir-app">
      <h4>Download IR App</h4>
      <hr />

      <div className="col-md-12 col-lg-12 col-sm-6 col-8 my-2 mt-3">
        <button className="d-flex align-items-center w-100">
          <div className="apple-icon w-25">
            <AiFillApple />
          </div>

          <div>
            <p>
              {i18n.language === "en" ? "Download on the" : "التحميل من علي "}
            </p>
            <h4>App Store</h4>
          </div>
        </button>
      </div>

      <div className="col-md-12 col-lg-12 col-sm-6 col-8">
        <button className="d-flex align-items-center w-100">
          <div className="icon w-25">
            <img
              src={require("../../../Assets/googleplaystore-removebg-preview.png")}
              alt="google store"
              style={{ height: "30px", width: "30px" }}
            />
          </div>

          <div>
            <p>
              {i18n.language === "en" ? "Download on the" : "التحميل من علي"}
            </p>
            <h4>Google Play</h4>
          </div>
        </button>
      </div>
    </div>
  );
}

export default DownloadIRApp;
