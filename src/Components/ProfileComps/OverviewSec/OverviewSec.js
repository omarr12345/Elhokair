import React from "react";
import "./Overview.css";
const OverviewSec = (props) => {
  return (
    <div className="my-5">
      <h4>Overview</h4>
      <div
        dangerouslySetInnerHTML={{ __html: props.content }}
        className="html-converted-txt"
      />
    </div>
  );
};

export default OverviewSec;
