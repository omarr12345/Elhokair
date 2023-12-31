import React, { useState } from "react";
import { useOutletContext } from "react-router";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { AiOutlineDownCircle } from "react-icons/ai";
import NotesModal from "../../GlobalComps/NotesModal/NotesModal";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
function News() {
  const [current, setCurrent] = useState();
  const [page, setPage] = useState(1);
  const { i18n } = useTranslation();
  const data = useOutletContext()?.LatestNewsData;
  const totalPages = data?.length / 5;
  return (
    <>
      <div className="news">
        <h4 className="mt-5 mb-3">
          {i18n.language === "en" ? "News" : "أخبار"}
          <hr />
        </h4>

        {data?.slice((page - 1) * 5, page * 5)?.map((news, newsIndex) => {
          return (
            <div key={newsIndex} className="col-md-12 row my-3">
              <div className="col-md-3">
                {moment(news?.publishedOn, "DD-MM-YYYY[T]HH:mm:ss").format(
                  "DD/MM/YYYY"
                )}
              </div>
              <div className="col-md-8">{news?.title}</div>

              <div className="col-md-1 text-end">
                <AiOutlineDownCircle
                  onClick={() => {
                    setCurrent(news?.body);
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="notes-modal-icon"
                />
              </div>
            </div>
          );
        })}

        <NotesModal content_3={current} />
      </div>
      <div className="pagi-container">
        <ResponsivePagination
          current={page}
          total={totalPages}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}

export default News;
