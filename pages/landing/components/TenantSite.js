import Head from "next/head";
import LandingPageCard from "./LandingPageCard";
import Heading from "./Heading";
import HorizontalLine from "./HorizontalLine";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../../utility/Store";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import { TitleCaseFormatter } from "../../../utility/functions/Formatters/TitleCaseFormatter";

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
  const [loading, setLoading] = useState(false);

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
        setLoading(true);
      });
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
  };

  var count = 0;
  return (
    <>
      <Head>
        <title>Your Sites</title>
      </Head>
      {loading ? (
        <>
          <Heading head="Your Sites" />
          <HorizontalLine />
          {state.siteDetail?.map((data) => {
            if (data.status == "1") {
              count++;
              var address =
                data?.site_id?.address?.first_line +
                ", " +
                data?.site_id?.address?.landmark +
                ", " +
                data?.site_id?.address?.city +
                ", " +
                data?.site_id?.address?.state +
                ", " +
                data?.site_id?.address?.country +
                ", " +
                "Pincode: " +
                data?.site_id?.address?.pincode;

              return (
                <div key={i++}>
                  {console.log(data.site_id?.landlord_id?.name)}
                  <LandingPageCard
                    site_id={data.site_id?._id}
                    leave_id={data._id}
                    alias={TitleCaseFormatter(data.site_id?.alias_name)}
                    owner={TitleCaseFormatter(data.site_id?.landlord_id?.name)}
                    rent={data.site_id?.rent}
                    address={TitleCaseFormatter(address)}
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
          {count == 0 ? "No accepted sites." : ""}
        </>
      ) : (
        <div className="p_spinner">
          <ReactBootStrap.Spinner animation="border" variant="light" />
        </div>
      )}
    </>
  );
};

export default TenantSite;
