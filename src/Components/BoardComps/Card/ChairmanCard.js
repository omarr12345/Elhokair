import "./chairman-card.css";
import { useTranslation } from "react-i18next";

function ChairmanCard(props) {
  const { i18n } = useTranslation();

  return (
    <>
      <div
        className="chairman-card d-flex flex-row my-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <div className="chairman-img">
          <img
            src={props.content.profilePicURL}
            className="profile-img"
            alt="chairman"
            id="chairman-img"
          />
        </div>
        <div className="chairman-card-data d-flex flex-column">
          <div className="person-info w-100">
            <h5 className="person-name chairman-name">
              {i18n.language === "en"
                ? props?.content?.nameEn
                : props?.content?.nameAr}
            </h5>

            <p className="person-position">
              {i18n.language === "en"
                ? props?.content?.positionNameEn
                : props?.content?.positionNameAr}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChairmanCard;
