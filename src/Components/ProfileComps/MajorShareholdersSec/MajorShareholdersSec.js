import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
function MajorShareholdersSec() {
  const { i18n } = useTranslation();
  const d = useOutletContext()?.data?.subsidiaries;
  return (
    <div className="my-5 major-shareholders">
      <h4>
        {i18n.language === "en"
          ? "Subsidiaries&Associates"
          : "الشركات التابعة والزميلة"}
      </h4>

      <hr />
      <div className="row my-3">
        <div className="col-md-6">
          <h4> {i18n.language === "en" ? "Company" : "الشركة"}</h4>
        </div>
        <div className="col-md-3">
          <h4> {i18n.language === "en" ? "Country" : "الدوله"}</h4>
        </div>
        <div className="col-md-3 text-left">
          <h4 className="text-left">
            {" "}
            {i18n.language === "en" ? "Percentage" : "النسبه"}
          </h4>
        </div>
      </div>
      <br />
      {d?.map((diary, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-md-6 text-left">
              <p>
                {" "}
                {i18n.language === "en"
                  ? diary?.companyNameEn
                  : diary?.companyNameAr}
              </p>
            </div>
            <div className="col-md-3 text-left">
              <p>
                {i18n.language === "en"
                  ? diary?.countryNameEn
                  : diary?.countryNameAr}
              </p>
            </div>
            <div className="col-md-3 text-left">
              <p>{diary?.percentage}%</p>
            </div>
            <br />
            <br />
          </div>
        );
      })}
      <hr />
    </div>
  );
}

export default MajorShareholdersSec;
