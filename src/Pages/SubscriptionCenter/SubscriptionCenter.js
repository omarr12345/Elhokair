import React from "react";
import SubscriptionCenterMainComp from "../../Components/SubscriptionCenterComps/SubscriptionCenterMainComp/SubscriptionCenterMainComp";
import IRContacts from "../../Components/SubscriptionCenterComps/IRContacts/IRContacts";
import DownloadIRApp from "../../Components/SubscriptionCenterComps/DownloadIRApp/DownloadIRApp";

function SubscriptionCenter() {
  return (
    <div className="subscription-center">
      <div className="row my-5">
        <div className="col-md-7">
          <SubscriptionCenterMainComp />
        </div>
        <div className="col-md-5">
          <IRContacts />
          <DownloadIRApp />
        </div>
      </div>
    </div>
  );
}

export default SubscriptionCenter;
