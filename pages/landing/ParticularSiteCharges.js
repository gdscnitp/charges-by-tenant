import Header from "../components/Header";
import ChargesList from "./components/ChargesList";
import Image from "next/image";
import ParticularSite from "../../public/images/ParticularSite.png";
import NameLabel from "../components/NameLabel";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../utility/Store";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import axios from "axios";

export default function ParticularSiteC() {
  const router = useRouter();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { dispatch, state } = useContext(Store);

  const getAllCharges = async () => {
    console.log("get all called");
    closeSnackbar();
    let config = {
      headers: {
        authorization: "b " + JSON.parse(Cookies.get("userInfo")).data.token,
      },
    };
    try {
      await axios.get("/api/charges/viewAll", config).then((res) => {
        dispatch({
          type: "ALL_CHARGES",
          payload: res.data,
        });
      });
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
  };

  useEffect(() => {
    getAllCharges();
  }, []);
  console.log(state.allCharges);

  return (
    <>
      {/* <div className="p_sitepage">
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
            <ChargesList
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
      </div> */}
    </>
  );
}
