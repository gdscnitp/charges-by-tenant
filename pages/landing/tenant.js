import Identity from "./components/Identity";
import TenantSite from "./components/TenantSite";
import TenantReq from "./components/TenantReq";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../utility/Store";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import axios from "axios";

const Tenant = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { dispatch, state } = useContext(Store);

  // useEffect(() => {
  //   getDetails();
  // }, []);

  // const getDetails = async () => {
  //   closeSnackbar();
  //   // var correct = validateData(details);

  //   // console.log(Cookies.get("userInfo"));
  //   let config = {
  //     headers: {
  //       authorization: "b " + JSON.parse(Cookies.get("userInfo")).data.token,
  //     },
  //   };
  //   try {
  //     axios.post("/api/auth/users/login", {}, config).then((res) => {
  //       dispatch({
  //         type: "USER_INFO_FETCHING",
  //         payload: res.data?.data,
  //       });
  //     });

  //     enqueueSnackbar("Data Retrieved", { variant: "success" });
  //   } catch (err) {
  //     console.log(err);
  //     enqueueSnackbar(err.response?.data?.message, { variant: "error" });
  //   }
  // };

  const ISSERVER = typeof window === "undefined";
  var tenantData;
  if (!ISSERVER) {
    tenantData = JSON.parse(localStorage.getItem("TenantData"));
  }

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
        userDetails={tenantData}
      />
      <div className="S_right S_background_image">
        {siteState ? <TenantSite /> : <TenantReq />}
      </div>
    </div>
  );
};

export default Tenant;
