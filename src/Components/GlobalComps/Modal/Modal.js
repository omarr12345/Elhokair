import "./Modal.css";
import { useTranslation } from "react-i18next";

function Modal(props) {
  const { i18n } = useTranslation();

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="exampleModalLabel">
                {i18n.language === "en"
                  ? props?.content?.nameEn
                  : props?.content?.nameAr}
              </h5>
              {/* <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
            </div>
            <div className="modal-body">
              <div className="highlights">
                <p>
                  {i18n.language === "en" ? "Highlights" : "السيرة الذاتيه"}
                </p>
                <hr />
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      i18n.language === "en"
                        ? props.content?.resumeHighLightEn
                        : props.content?.resumeHighLightAr,
                  }}
                  className="html-converted-txt"
                />
              </div>
              <div className="position-history">
                <p>{i18n.language === "en" ? "Key Dates" : "أهم التواريخ"}</p>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    {i18n.language === "en" ? "CompanyName" : "اسم الشركه"}
                  </div>
                  <div className="col-md-3">
                    {i18n.language === "en" ? "Company Position" : "المنصب"}
                  </div>
                  <div className="col-md-3">
                    {i18n.language === "en" ? "Started From" : "بدأ في"}
                  </div>
                  <div className="col-md-3">
                    {i18n.language === "en" ? "Ended On" : "انتهي في"}
                  </div>
                </div>
                <br />

                {props.content?.positionHistory.map((history, historyIndex) => {
                  return (
                    <div className="row" key={historyIndex}>
                      <div className="col-md-3 my-2">
                        {i18n.language === "en"
                          ? history?.companyNameEn
                          : history?.companyNameAr}
                      </div>
                      <div className="col-md-3 my-2">
                        {i18n.language === "en"
                          ? history?.positionNameEn
                          : history?.positionNameAr}
                      </div>
                      <div className="col-md-3 my-2">
                        {history?.startedOn || "--"}
                      </div>
                      <div className="col-md-3 my-2">
                        {history?.endedOn || "--"}
                      </div>
                      <br />
                      <br />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                {i18n.language === "en" ? "Close" : "إغلاق"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
