import Head from "next/head";
import Image from "next/image";
import Total_Charges from "../../public/images/Total_Charges.png";
import Header from "./components/Header";
import NameLabel from "../components/NameLabel";
import TotalchargesCard from "./components/totalChargesCard";
import Taskbar from "../profile/components/Taskbar";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../utility/Store";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";

export default function ParticularSiteCharges() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const { dispatch, state } = useContext(Store);
  const [loading, setLoading] = useState(false);

  // console.log(router.query?.site_id);
  // var address =
  //   state.?.site_id?.address?.first_line +
  //   ", " +
  //   data?.site_id?.address?.landmark +
  //   ", " +
  //   data?.site_id?.address?.city +
  //   ", " +
  //   data?.site_id?.address?.state;

  useEffect(() => {
    getCharges();
  }, [router.query?.site_id]);

  const getAddress = () => {
    var address =
      state.particularSiteCharges[0]?.site_id?.address?.first_line +
      ", " +
      state.particularSiteCharges[0]?.site_id?.address?.landmark +
      ", " +
      state.particularSiteCharges[0]?.site_id?.address?.city +
      ", " +
      state.particularSiteCharges[0]?.site_id?.address?.state +
      ", " +
      state.particularSiteCharges[0]?.site_id?.address?.country +
      ", Pincode: " +
      state.particularSiteCharges[0]?.site_id?.address?.pincode;

    return address;
  };

  const getCharges = async () => {
    closeSnackbar();
    let config = {
      headers: {
        authorization: "b " + JSON.parse(Cookies.get("userInfo")).data.token,
      },
    };
    try {
      if (router.query?.site_id) {
        axios
          .post(
            "/api/charges/view",
            {
              siteId: router.query?.site_id,
            },
            config
          )
          .then((res) => {
            dispatch({
              type: "PARTICULAR_SITE_CHARGES",
              payload: res.data,
            });
            setLoading(true);
            console.log(res);
            if (res.data?.success) {
              enqueueSnackbar("Got Charges", { variant: "success" });
            }
          });
      }
    } catch (err) {
      enqueueSnackbar(err.response?.data?.message, { variant: "error" });
    }
  };

  console.log(state.particularSiteCharges);

  return (
    <>
      <Head>
        <title>Site Charges</title>
      </Head>
      {loading ? (
        <>
          <div className="Parent">
            <Taskbar />
            <div className="S_right">
              <div>
                <link
                  rel="stylesheet"
                  href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                  integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                  crossOrigin="anonymous"
                ></link>
                <link
                  rel="stylesheet"
                  href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                  crossOrigin="anonymous"
                />
                {state.particularSiteCharges?.length <= 0 ? (
                  <div>
                    <Header header="Total Charges" />
                    No charges to display
                  </div>
                ) : (
                  <div>
                    <Header header="Total Charges" />

                    <NameLabel
                      label="Alias Name"
                      details={
                        state.particularSiteCharges[0]?.site_id?.alias_name
                      }
                    />
                    <NameLabel
                      label="Type"
                      details={state.particularSiteCharges[0]?.site_id?.Type}
                    />
                    <NameLabel label="Address" details={getAddress()} />

                    {state.particularSiteCharges.map((data, index) => {
                      console.log(data);
                      return (
                        <TotalchargesCard
                          key={index}
                          description={data.description}
                          siteDetails={data.site_id}
                        />
                      );
                    })}
                  </div>
                )}
                <div className="tc">
                  <Image src={Total_Charges} alt="TC" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="p_spinner">
          <ReactBootStrap.Spinner animation="border" />
        </div>
      )}
    </>
  );
}
