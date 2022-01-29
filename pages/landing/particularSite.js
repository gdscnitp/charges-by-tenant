import Header from "../components/Header";
import RentersList from "./components/RentersList";
import Image from "next/image";
import ParticularSite from "../../public/images/ParticularSite.png";
import NameLabel from "../components/NameLabel";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../utility/Store";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import axios from "axios";

export default function ParticularSiteComponent() {
  const router = useRouter();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { dispatch, state } = useContext(Store);
  // useEffect(async () => {
  //   await getDetails();
  // }, []);

  const getDetails = async () => {
    if (state.userInfo?.token) {
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
    } else {
      enqueueSnackbar("Login/Signup required", { varient: "success" });
    }
  };

  // useEffect(() => {
  //   getSite();
  // }, []);

  const getSite = async () => {
    if (Cookies.get("userInfo")) {
      closeSnackbar();

      let config = {
        headers: {
          authorization: "b " + JSON.parse(Cookies.get("userInfo")).data.token,
        },
      };

      try {
        await axios.get(`/api/site/${router.query.id}`, config).then((res) => {
          dispatch({
            type: "GET_PARTICULAR_SITE",
            payload: res.data,
          });
        });

        // enqueueSnackbar("Site Loaded", { variant: "success" });
      } catch (err) {
        enqueueSnackbar(err.response?.data?.message, { variant: "error" });
      }
    } else {
      enqueueSnackbar("Signup/signin Required", { varient: "success" });
    }
  };

  return (
    <>
      <div className="p_sitepage">
        <Header header="Site Status" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
        <div className="p_site">
          <div className="p_sitecontainer">
            <div>
              <NameLabel
                label="Site Name"
                details={state.siteDetail?.alias_name}
              />
            </div>
            <div>
              <NameLabel label="Site Type" details={state.siteDetail?.Type} />
            </div>
            <div>
              <span className="p_label">Address:</span>
              <textarea
                className="p_textarea"
                id="story"
                name="story"
                rows="5"
                cols="33"
                value={`${state.siteDetail?.address?.first_line}, ${state.siteDetail?.address?.landmark}, ${state.siteDetail?.address?.city}, ${state.siteDetail?.address?.state}, ${state.siteDetail?.address?.country} P.O: ${state.siteDetail?.address?.pincode}`}
              ></textarea>
            </div>
          </div>
          <div className="p_psite">
            <Image src={ParticularSite} alt="sub" />
          </div>
        </div>
        <div className="p_particular">
          {state.siteDetail.current_tenant?.length > 0 ? (
            <RentersList
              head="Renters Alloted"
              tenantDetails={state.siteDetail?.current_tenant[0]}
              historyDetail={state.siteDetail?.history[0]}
              rent={state.siteDetail?.rent}
              deposit={state.siteDetail?.deposit}
              flat="Flat No."
              loc="Location"
              rentedFrom="RentedFrom"
              rentedTill="Rented Till"
            />
          ) : (
            "There no Tenant for this site"
          )}
        </div>
        {/* <div className='btn3'>
                    <button className='btn1 p_btr'>Add New Tenant</button>
                </div> */}
      </div>
    </>
  );
}
