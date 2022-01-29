import LandingPageCard from "./LandingPageCard";
import Heading from "./Heading";
import HorizontalLine from "./HorizontalLine";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../../utility/Store";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import axios from "axios";

var i = 0;

const cardContents = [
  {
    aliasName: "Dummy",
    owner: "Vivek Khan",
    rent: "15000/-",
    address: "room no. 108, Lakshmipuram Society",
    cclass: "blue",
    class1: "btn-warning",
    text1: "Details",
    class2: "btn-warning a-margin-left",
    text2: "History",
    class3: "btn-success px-2",
    text3: "Paid",
  },
];

const TenantSite = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { dispatch, state } = useContext(Store);
  useEffect(() => {
    getDetails();
  }, []);

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
      // console.log(err);
      enqueueSnackbar(err.response?.data?.message, { variant: "error" });
    }
  };

  useEffect(() => {
    ViewReq();
  }, []);

  const ViewReq = async () => {
    closeSnackbar();
    let config = {
      headers: {
        authorization: "b " + JSON.parse(Cookies.get("userInfo")).data.token,
      },
    };
    try {
      await axios.get("/api/profile/viewsite", config).then((res) => {
        dispatch({
          type: "VIEW_REQUESTS",
          payload: res.data,
        });
      });
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
  };
  var count = 0;
  return (
    <>
      <Heading head="Your Sites" />
      <HorizontalLine />

      {state.siteDetail?.map((data) => {
        if (data.status == "1") {
          count++;
          return (
            <div key={i++}>
              <LandingPageCard
                alias={data.site_id?.alias_name}
                owner={data.site_id?.owner}
                rent={data.site_id?.rent}
                address={`${data?.site_id?.address?.first_line}, ${data?.site_id?.address?.landmark}, ${data?.site_id?.address?.city}, ${data?.site_id?.address?.state}, ${data?.site_id?.address?.country} P.O: ${data?.site_id?.address?.pincode}`}
                cclass="a-panel"
                class1="btn-warning"
                text1="Details"
                class2="btn-warning a-margin-left"
                text2="History"
                class3="btn-success px-2"
                text3="Paid"
              />
            </div>
          );
        }
      })}
      {count == 0 ? "NO ACCEPTED SITES" : ""}
    </>
  );
};

export default TenantSite;
