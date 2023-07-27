import React, { useState } from "react";
import "./DisclosuresMainComp.css";
import { useOutletContext } from "react-router";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { AiOutlineDownCircle } from "react-icons/ai";
import NotesModal from "../../GlobalComps/NotesModal/NotesModal";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/bootstrap.css';
function DisclosuresMainComp() {
  const { i18n } = useTranslation();
  const [current, setCurrent] = useState();
  const [page, setPage] = useState(1);
  const data = useOutletContext()?.disclosuresData;
  const totalPages = data?.length / 5;
  return (
    <>
      <div className="disclosure-main-comp">
        <h4 className="mt-5 mb-3">
          {i18n.language === "en" ? "Disclosures" : "الافصاحات"}
          <hr />
        </h4>

        {data
          ?.slice((page - 1) * 5, page * 5)
          ?.map((disclosure, disclosureIndex) => {
            return (
              <div key={disclosureIndex} className="row my-3">
                <div className="col-md-3">
                  {moment(
                    disclosure?.publishedOn,
                    "DD-MM-YYYY[T]HH:mm:ss"
                  ).format("DD/MM/YYYY")}
                </div>
                <div className="col-md-8">{disclosure?.title}</div>

                <div className="col-md-1">
                  <AiOutlineDownCircle
                    onClick={() => {
                      setCurrent(disclosure?.body);
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="notes-modal-icon"
                  />
                </div>
              </div>
            );
          })}

        <NotesModal content_5={current} />
      </div>
      <div className="text-center">

        <ResponsivePagination
          current={page}
          total={totalPages}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}

export default DisclosuresMainComp;
