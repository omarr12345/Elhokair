import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Loader from "../../Components/GlobalComps/Loader/Loader";
import { NavLink, Outlet } from "react-router-dom";
import AccessRefreshTokens from "../../Services/services";

function Board() {
  const { i18n } = useTranslation();

  const { isLoading, isError, data } = useQuery(
    "Board",
    () =>
      AccessRefreshTokens.getAccessToken().then(() =>
        axios
          .get(
            `https://data.argaam.com/api/v1.0/json/ir-api/organizational-structure`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((res) => res.data)
      ),
    {
      refetchOnWindowFocus: false,
    }
  );

  const [boardMembers, setBoardMem] = useState();

  const [chairman, setChairman] = useState();

  const [executives, setExecutives] = useState();

  const [salariesAndBonuses, setSalariesAndBonuses] = useState();

  useEffect(() => {
    setChairman(
      data?.individuals?.filter((v) => {
        return v?.positionNameEn === "Chairman of the Board";
      })
    );
    setExecutives(
      data?.individuals?.filter((v) => {
        return (
          v?.positionNameEn === "Chief Executive Officer / Manager " ||
          v?.positionNameEn === "Chief-Financial-Officer"
        );
      })
    );
    setBoardMem(
      data?.individuals?.filter((v) => {
        return (
          v?.positionNameEn !== "Chairman of the Board" &&
          v?.positionNameEn !== "Chief Executive Officer / Manager " &&
          v?.positionNameEn !== "Chief-Financial-Officer" &&
          v?.positionNameEn !== "Managing Director"
        );
      })
    );
    setSalariesAndBonuses(data?.salaries);
  }, [data?.individuals, data?.salaries]);
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (isError) {
    return <div>is Error</div>;
  }
  return (
    <div className="board">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <NavLink
            to={{
              pathname: "/board&managment/board",
              search: `${window.location.search}`,
            }}
            className="nav-link"
          >
            {i18n.language === "en" ? "Board And Managment" : " الادارة"}
          </NavLink>
        </li>
        <hr />
        <li className="nav-item">
          <NavLink
            to={{
              pathname: "/board&managment/salaries&bonuses",
              search: `${window.location.search}`,
            }}
            className="nav-link"
          >
            {i18n.language === "en" ? "Salaries&Bonuses" : "الرواتب و المكافأت"}
          </NavLink>
        </li>
      </ul>
      {/* <BoardMainSec /> */}
      <Outlet
        context={{ boardMembers, chairman, executives, salariesAndBonuses }}
      />
    </div>
  );
}

export default Board;
