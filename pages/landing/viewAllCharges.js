import Head from "next/head";
import Header from "../components/Header";
import ChargesList from "./components/ChargesList";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../utility/Store";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import NotLoggedIn from "../notLoggedIn/NotLoggedIn";

export default function ViewAllCharges() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const { dispatch, state } = useContext(Store);
  const [loading, setLoading] = useState(false);

  const getAllCharges = async () => {
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
        setLoading(true);
      });
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
  };

  useEffect(() => {
    getAllCharges();
  }, []);

  return (
    <>
      {!Cookies.get("userInfo") ? (
        <NotLoggedIn />
      ) : (
        <div>
          <Head>
            <title>All Charges</title>
          </Head>
          {loading ? (
            <div className="p_sitepage">
              <Header header="All Charges for Your Site" />
              <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                crossOrigin="anonymous"
              />

              <div className="p_particular mt-5">
                {state.allCharges?.length > 0 ? (
                  <ChargesList
                    head="All Charges"
                    allCharges={state.allCharges}
                  />
                ) : (
                  "There are no charges to display"
                )}
              </div>
            </div>
          ) : (
            <div className="p_spinner">
              <ReactBootStrap.Spinner animation="border" variant="light" />
            </div>
          )}
        </div>
      )}
    </>
  );
}
