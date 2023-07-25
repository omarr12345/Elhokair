import React from "react";
import "./Salaries&Bonuses.css";
import { useOutletContext } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useTranslation } from "react-i18next";


function SalariesAndBonuses() {

    const { i18n } = useTranslation();
    const salariesAndBonuses = useOutletContext()?.salariesAndBonuses;
    return (
        <div className="Salaries-Bonuses">
            <h4 className="mt-5">Salaries & Bonuses</h4>
            <hr />
            <Tabs className="mt-3">
                <TabList>
                    {salariesAndBonuses?.map((s, sIndex) => {
                        return <React.Fragment key={sIndex}><Tab><div>{s.year}</div></Tab></React.Fragment>
                    })}
                </TabList>

                {salariesAndBonuses?.map((s, sIndex) => {
                    return (
                        <React.Fragment key={sIndex} >
                            <TabPanel>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>{i18n.language === "en" ? "Details" : "تفاصيل"}</th>
                                                <th>{i18n.language === "en" ? "Board Members" : "أعضاء مجلس الادارة"}</th>
                                                <th>{i18n.language === "en" ? "Executives" : "المديرين"}</th>
                                                <th>{i18n.language === "en" ? "Total" : "الاجمالي"}</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <th>{i18n.language === "en" ? "Salaries" : "المرتبات"}</th>
                                                <td>{s?.boardMembersRenumerations?.salaries || "--"}</td>
                                                <td>{s?.executivesRenumerations?.salaries || "--"}</td>
                                                <td>{s?.totalsRenumerations?.salaries || "--"}</td>

                                            </tr>
                                            <tr>
                                                <th>{i18n.language === "en" ? "Bonuses" : "المكافأت"}</th>
                                                <td>{s?.boardMembersRenumerations?.bonuses || "--"}</td>
                                                <td>{s?.executivesRenumerations?.bonuses || "--"}</td>
                                                <td>{s?.totalsRenumerations?.bonuses || "--"}</td>

                                            </tr>
                                            <tr>
                                                <th>{i18n.language === "en" ? "Other Benefits" : "امتيازات أخري"}</th>
                                                <td>
                                                    {s?.boardMembersRenumerations?.otherRewards || "--"}

                                                </td>

                                                <td> {s?.executivesRenumerations?.otherRewards || "--"}</td>
                                                <td> {s?.totalsRenumerations?.otherRewards || "--"}</td>

                                            </tr>
                                            <tr>
                                                <th>{i18n.language === "en" ? "Total" : "الاجمالي"}</th>
                                                <td>{s?.boardMembersRenumerations?.total || "--"}</td>
                                                <td>{s?.executivesRenumerations?.total || "--"}</td>
                                                <td>{s?.totalsRenumerations?.total || "--"}</td>

                                            </tr>
                                            <tr>
                                                <th>{i18n.language === "en" ? "Notes" : "الملاحظات"}</th>
                                                <td>{i18n.language === "en" ? s?.boardMembersRenumerations?.notesEn || "--" : s?.boardMembersRenumerations?.notesAr || "--"}</td>
                                                <td>{i18n.language === "en" ? s?.executivesRenumerations?.notesEn || "--" : s?.executivesRenumerations?.notesAr || "--"}</td>
                                                <td>{i18n.language === "en" ? s?.totalsRenumerations?.notesEn || "--" : s?.totalsRenumerations?.notesAr || "--"}</td>


                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </TabPanel>
                        </React.Fragment>

                    );
                })}


            </Tabs>
        </div>
    );
}

export default SalariesAndBonuses;
