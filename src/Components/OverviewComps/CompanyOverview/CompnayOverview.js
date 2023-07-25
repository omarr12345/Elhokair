import React from "react";
import "./CompanyOverview.css";
import { useTranslation } from "react-i18next";
function CompnayOverview() {
      const { i18n } = useTranslation();
      return (
            <div className="company-overview my-5">

                  <h4>{i18n.language === "en" ? "Company Overview" : "رؤية الشركة"}</h4>
                  <hr />
                  <p className="my-2">
                        {i18n.language === "en"
                              ? "Alhokair group is a name that has been tied the world of hospitality and entertainment for decades. To many, it has become the first name that comes to mind when tourism in Saudi Arabia or the Arabian world are mentioned. The group was started in 1975 to invest in the sectors of entertainment and hospitality under the leadership of Sheikh Abdulmohsin Alhokair. Over five decades, the group’s projects expanded to include 92 entertainment centers and35 hotels spread in Saudi Arabia and United Arab Emirates.The group continues to develop its tourism investments to deliver the best of what top global companies offer by attracting expertise and establishing partnerships that enhance returns of investment and makes a difference in the fields of entertainment and hospitality."
                              : "مجموعة الحكير اسم ارتبط بعالم الضيافة والترفيه على مدى عقود. بالنسبة للكثيرين ، فقد أصبح الاسم الأول الذي يتبادر إلى الذهن عند ذكر السياحة في المملكة العربية السعودية أو العالم العربي. بدأت المجموعة في عام 1975 للاستثمار في قطاعات الترفيه والضيافة تحت قيادة الشيخ عبد المحسن الحكير. على مدى خمسة عقود ، توسعت مشاريع المجموعة لتشمل 92 مركزًا ترفيهيًا و 35 فندقًا منتشرة في المملكة العربية السعودية والإمارات العربية المتحدة. تواصل المجموعة تطوير استثماراتها السياحية لتقديم أفضل ما تقدمه الشركات العالمية الكبرى من خلال جذب الخبرات وإقامة شراكات تعزز عوائد الاستثمار وتحدث فرقًا في مجالات الترفيه والضيافة"}
                  </p>
            </div>
      );
}

export default CompnayOverview;
