import Identity from "./components/Identity";
import TenantSite from "./components/TenantSite";
import TenantReq from "./components/TenantReq";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../utility/Store";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import axios from "axios";
import NotLoggedIn from "../notLoggedIn/NotLoggedIn";

const Tenant = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { dispatch, state } = useContext(Store);

  const getDetails = async () => {
    closeSnackbar();
    let config = {
      headers: {
        authorization: "b " + JSON.parse(Cookies.get("userInfo")).data.token,
      },
    };
    try {
      axios.post("/api/auth/users/login", {}, config).then((res) => {
        dispatch({
          type: "USER_INFO_FETCHING",
          payload: res.data?.data,
        });
      });
      enqueueSnackbar("Data Retrieved", { variant: "success" });
    } catch (err) {
      enqueueSnackbar(err.response?.data?.message, { variant: "error" });
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  console.log(state.siteDetail);

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

  const getCount = () => {
    console.log("hello");
    var count = 0;
    if (state.siteDetail) {
      for (var i = 0; i < state.siteDetail?.length; i++) {
        if (state.siteDetail[i]?.site_id?.status == 1) {
          count++;
        }
      }
    }
    console.log("count: " + count);
    return count;
  };

  useEffect(() => {
    getCount();
  }, [state.siteDetail]);

  return (
    <>
      {!Cookies.get("userInfo") ? (
        // <NotLoggedIn />
        <span>You are not logged in</span>
      ) : (
        <div>
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
              getCount={getCount()}
            />
            <div className="S_right S_background_image">
              {siteState ? <TenantSite /> : <TenantReq />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tenant;
