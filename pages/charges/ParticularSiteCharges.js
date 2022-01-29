import Image from "next/image";
import Total_Charges from "../../public/images/Total_Charges.png";
import Header from "./components/Header";
import TotalchargesCard from "./components/totalChargesCard";
import Taskbar from "../profile/components/Taskbar";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../utility/Store";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import axios from "axios";
var i = 0;

const allTransactions = [
  {
    electricity: 1234,
    internet: 4567,
    water: 789,
  },
  {
    electricity: 8767,
    internet: 9245,
    water: 54876,
  },
  {
    electricity: 1234,
    internet: 4567,
    water: 789,
  },
  {
    electricity: 8767,
    internet: 9245,
    water: 54876,
  },
];

export default function ParticularSiteCharges() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const { dispatch, state } = useContext(Store);
  // console.log(router.query?.site_id);

  useEffect(() => {
    getCharges();
  }, []);

  const getCharges = async () => {
    closeSnackbar();
    let config = {
      headers: {
        authorization: "b " + JSON.parse(Cookies.get("userInfo")).data.token,
      },
    };
    try {
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
          console.log(res);
          if (res.data?.success) {
            enqueueSnackbar("Got Charges", { variant: "success" });
          }
        });
    } catch (err) {
      enqueueSnackbar(err.response?.data?.message, { variant: "error" });
    }
  };

  console.log(state.particularSiteCharges);

  return (
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

            <div className="p_right">
              <Header header="Total Charges" />

              {allTransactions.map((data) => {
                return (
                  <TotalchargesCard
                    key={i++}
                    electricity={data.electricity}
                    internet={data.internet}
                    water={data.water}
                  />
                );
              })}
            </div>
            <div className="tc">
              <Image src={Total_Charges} alt="TC" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
