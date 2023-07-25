import React from "react";
import "./ProjectsTable.css";
import { useQuery } from "react-query";
import axios from "axios";
import moment from "moment";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../GlobalComps/Loader/Loader";
function ProjectsTable() {
  const { i18n } = useTranslation();

  const [projectName, setProjectName] = useState("");

  const { isLoading, isError, data } = useQuery(
    ["projects"],
    () =>
      axios
        .get("https://data.argaam.com/api/v1.0/json/ir-api/projects-news/en", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => res?.data?.projects),
    {
      refetchOnWindowFocus: false,
      select: (projects) =>
        projects?.filter((project) =>
          project?.projectNameEn?.toLowerCase()?.includes(projectName) || project?.projectNameAr?.toLowerCase()?.includes(projectName)
        ),
    }
  );
  if (isLoading) {
    return <div><Loader /></div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="projects-table">
      <div className="d-flex flex-row flex-wrap my-5 align-items-center flex-wrap  justify-content-between">
        <div className="my-2">
          <h4>{i18n.language === "en" ? "Project Monitor" : "متابعة المشاريع"}</h4>
        </div>

        <div className="my-2">
          <form className="d-flex flex-row h-100">
            <input
              className="form-control"
              type="text"
              placeholder="Project Name"
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
      <hr />

      <div className="table-responsive">
        <table className="table fw-bold">
          <thead>
            <tr>
              <th scope="col">{i18n.language === "en" ? "Date" : "التاريخ"}</th>
              <th scope="col">{i18n.language === "en" ? "Projects" : "المشاريع"}</th>
              <th scope="col"> {i18n.language === "en" ? "Related Parties" : "شركات ذات علاقة"}</th>
              <th scope="col">{i18n.language === "en" ? "Country" : "الدولة"}</th>
              <th scope="col">{i18n.language === "en" ? "Cost(Million)" : "التكلفة (مليون)"}</th>
              <th scope="col">{i18n.language === "en" ? "Status" : "حالة المشروع"}</th>
              <th scope="col">{i18n.language === "en" ? "Start" : "تاريخ البدأ"}</th>
              <th scope="col">{i18n.language === "en" ? "Completion" : "تاريخ الانتهاء"}</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((project, projectIndex) => {
              return (
                <tr key={projectIndex}>
                  <td>{moment(project?.announcedDate).format("DD/MM/YYYY")}</td>
                  <td>{i18n.language === "en" ? project?.projectNameEn : project?.projectNameAr}</td>
                  <td className="text-center">--</td>
                  <td>{i18n.language === "en" ? project?.countryNameEn : project?.countryNameAr}</td>
                  <td className="text-center">{project?.cost || "--"}</td>
                  <td>{i18n.language === "en" ? project?.projectStatusNameEn : project?.projectStatusNameAr}</td>
                  <td>{project?.startDate}</td>
                  <td>{project?.expectedCompletionDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectsTable;
