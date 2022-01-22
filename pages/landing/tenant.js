import Identity from "./components/Identity";
import TenantSite from "./components/TenantSite";
import TenantReq from "./components/TenantReq";
import { useState, useContext } from "react";
import { Store } from "../../utility/Store";

const Tenant = () => {
  const [siteState, setStateSite] = useState(true);
  const [reqState, setStateReq] = useState(false);

  const onHandle1 = () => {
    if (reqState) {
      setStateSite(true);
      setStateReq(false);
    }
  };

  const onHandle2 = () => {
    if (siteState) {
      setStateSite(false);
      setStateReq(true);
    }
  };

  const { dispatch, state } = useContext(Store);
  console.log(state);
  return (
    <div className="S_tenant">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
      <Identity
        onShow1={onHandle1}
        onShow2={onHandle2}
        userDetails={state?.userInfo}
      />
      <div className="S_right S_background_image">
        {siteState ? <TenantSite /> : <TenantReq />}
      </div>
    </div>
  );
};

export default Tenant;
