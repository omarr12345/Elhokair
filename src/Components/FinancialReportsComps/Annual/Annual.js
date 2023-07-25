import React from "react";
import "./Annual.css";
import { useQuery } from "react-query";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Loader from "../../GlobalComps/Loader/Loader";
function Annual() {
  const { i18n } = useTranslation();
  //Fetch
  const { isLoading, isError, data } = useQuery(["financialReports"], () =>
    axios
      .get(
        "https://data.argaam.com/api/v1.0/json/ir-api/financial-results/en.financialResults",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => res.data)
  );

  //While Is Loading
  if (isLoading) {
    return <div><Loader /></div>;
  }

  //While Is Error
  if (isError) {
    return <div>... isError</div>;
  }

  //Else
  return (
    <div className="annual">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th className="fw-bold">{i18n.language === "en" ? "Year" : "عام"}</th>
              <th className="text-center fw-bold">{i18n.language === "en" ? "Annual" : "التقرير السنوي"}</th>
            </tr>
          </thead>
          <tbody>
            {data?.financialResults?.slice(0, 5)?.map((annReport, annReportInd) => {
              return (
                <tr className="fw-bold" key={annReportInd}>
                  <td>{annReport.year}</td>
                  <td className="text-center">
                    <a
                      href={annReport.annualen}
                      download
                      target="_blank"
                      className="btn btn-sm m-1"
                      style={{
                        backgroundColor: "rgb(0, 104, 179)",
                        color: "white",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      rel="noreferrer"
                    >
                      EN
                    </a>
                    <a
                      href={annReport.annualar}
                      download
                      target="_blank"
                      className="btn btn-sm m-1"
                      style={{
                        backgroundColor: "rgb(0, 104, 179)",
                        color: "white",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                      rel="noreferrer"
                    >
                      Ar
                    </a>

                    {/* <a
                      href="https://www.instagram.com/fridartestudio"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm m-1"
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        fontSize: "13px",
                      }}
                    >
                      AR
                    </a> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Annual;
