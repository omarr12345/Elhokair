import React from "react";
import "./TopLogoImg.css";
function TopLogoImg() {
  return (
    <div className="top-logo-img">
      <img
        src={require("../../Assets/MicrosoftTeams-image (1).png")}
        alt="logo"
      />
    </div>
  );
}

export default TopLogoImg;
