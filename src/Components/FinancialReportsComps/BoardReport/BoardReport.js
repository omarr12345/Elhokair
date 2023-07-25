import "./BoardReport.css";
import axios from "axios";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
import Loader from "../../GlobalComps/Loader/Loader";
function BoardReport() {
  const { i18n } = useTranslation();
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

  if (isLoading) {
    return <div><Loader /></div>
  }

  if (isError) {
    return <div>is Error ...</div>
  }

  return <div className="board-report"> <div className="table-responsive">
    <table className="table">
      <thead>
        <tr >
          <th className="fw-bold">{i18n.language === "en" ? "Year" : "عام"}</th>
          <th className="text-center fw-bold">{i18n.language === "en" ? "Board Report" : "تقرير مجلس الادارة"}</th>
        </tr>
      </thead>
      <tbody>
        {data?.financialResults?.slice(0, 5)?.map((annReport, annReportIndex) => {
          return (
            <tr className="fw-bold" key={annReportIndex}>
              <td>{annReport.year}</td>
              <td className="text-center">
                <a
                  href={annReport.managmenten}
                  download
                  target="_blank"
                  className="btn btn-sm m-1"
                  style={{
                    backgroundColor: "rgb(0, 104, 179)",
                    color: "white",
                    fontSize: "13px",
                    fontWeight: "bold"
                  }} rel="noreferrer"
                >
                  EN
                </a>
                <a
                  href={annReport.managmentar}
                  download
                  target="_blank"
                  className="btn btn-sm m-1"
                  style={{
                    backgroundColor: "rgb(0, 104, 179)",
                    color: "white",
                    fontSize: "13px",
                    fontWeight: "bold"

                  }} rel="noreferrer"
                >
                  Ar
                </a>
              </td>

            </tr>
          );
        })}
      </tbody>
    </table>
  </div></div>;
}

export default BoardReport;
