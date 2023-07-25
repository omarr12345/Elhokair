import React from "react";
import "./NotesModal.css";
function NotesModal(props) {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5>
                {props?.content || (
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        props?.content_2 ||
                        props?.content_3 ||
                        props?.content_4 ||
                        props?.content_5,
                    }}
                    className="html-converted-txt"
                  />
                )}
              </h5>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default NotesModal;
