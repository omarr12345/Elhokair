import React, { useState } from "react";
import "./BoardMainSec.css";
import ChairmanCard from "../Card/ChairmanCard";
import Modal from "../../GlobalComps/Modal/Modal";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router";
function BoardMainSec() {
  const { i18n } = useTranslation();
  const [curr, setCurr] = useState();
  const chairman = useOutletContext()?.chairman;
  const executives = useOutletContext()?.executives;
  const boardMembers = useOutletContext()?.boardMembers;
  return (
    <div className="board-main-sec">
      <h4 className="mt-5 mb-3">
        {i18n.language === "en"
          ? "Board & Managment - Abdulmohsin El hokair Group For Tourism And Development"
          : "مجلس الإدارة والإدارة - مجموعة عبدالمحسن الحكير للسياحة والتنمية"}
      </h4>
      <hr />
      <div className="chairman">
        {/* <h4>
          {i18n.language === "en"
            ? "Chairman Of The Board"
            : "رئيس مجلس الادارة "}
        </h4> */}
        {/* <hr /> */}
        {chairman?.map((c, index) => {
          return (
            <div className="col-md-12" key={index} onClick={() => setCurr(c)}>
              <ChairmanCard content={c} />
            </div>
          );
        })}
      </div>
      <hr />
      <div className="board-members">
        {/* <h4>{i18n.language === "en" ? "Board Members" : "مجلس الادارة"}</h4> */}
        {/* <hr /> */}
        <div className="row">
          {boardMembers?.map((member, index) => {
            return (
              <div
                className="col-md-6"
                key={index}
                onClick={() => setCurr(member)}
              >
                <ChairmanCard content={member} />
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="executives">
        <h4>{i18n.language === "en" ? "Executives" : " المديرين "}</h4>
        <hr />
        <div className="row">
          {executives?.map((exect, index) => {
            return (
              <div
                className="col-md-6"
                key={index}
                onClick={() => setCurr(exect)}
              >
                <ChairmanCard content={exect} />
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <Modal content={curr} />
    </div>
  );
}

export default BoardMainSec;
