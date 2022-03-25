import LandingCardButton from "./LandingCardButton";
import LandingCardContent from "./LandingCardContent";
import HorizontalLine from "./HorizontalLine";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../../utility/Store";

function RequestPageCard(props) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { dispatch, state } = useContext(Store);
  const router = useRouter();
  const [acceptDetails, setAcceptDetails] = useState({
    histId: props.details?._id,
    accept: true,
  });

  const acceptSite = async (isAccepted) => {
    closeSnackbar();
    let config = {
      headers: {
        authorization: "b " + JSON.parse(Cookies.get("userInfo")).data.token,
      },
    };
    console.log("acceptdetails: " + JSON.stringify(acceptDetails));
    try {
      axios
        .post(
          "/api/profile/acceptsite",
          { histId: props.details?._id, accept: isAccepted },
          config
        )
        .then((res) => {
          dispatch({
            type: "ACCEPT_REQUEST",
            payload: res.data?.data,
          });
          if (res?.data?.data?.status == "1") {
            enqueueSnackbar("Site Accepted", { variant: "success" });
            return 1;
          } else if (res?.data?.data?.status == "3") {
            enqueueSnackbar("Site Rejected", { variant: "success" });
            return 1;
          }
        });
    } catch (err) {
      enqueueSnackbar(err.response?.data?.message, { variant: "error" });
    }
  };

  const acceptHandler = async () => {
    var response = await acceptSite(true);
    router.push("/profile/tenant");
  };

  const rejectHandler = () => {
    acceptSite(false);
    router.push("/profile/tenant");
  };

  return (
    <section className="a-card">
      <div
        className={`container shadow-lg a-landing-card mt-5 ${props.cclass}`}
        style={{ width: "65vw" }}
      >
        <div className="row justify-content-md-center p-3">
          <div className="col col-lg-4 a-image-container">
            <img
              className="card-img-top a-landing-card-image"
              src="/images/homePage.png"
              alt="Card image cap"
            />
          </div>
          <div className="col col-lg-8">
            <div className="card-body a-card-body">
              <h5 className="card-title a-landing-card-title">
                <span className="a-landing-card-heading"> Alias Name: </span>
                <span className="a-landing-card-data">{props.owner}</span>
              </h5>
              <div className="card-text">
                <div className="container">
                  <LandingCardContent
                    leftHeading="Owner"
                    rightdata={props.owner}
                  />
                  <LandingCardContent
                    leftHeading="Rent"
                    rightdata={props.rent}
                  />
                  <LandingCardContent
                    leftHeading="Address"
                    rightdata={props.address}
                  />
                </div>
              </div>
              <div className="container">
                <div>
                  <div className="a-button-container">
                    <div className="a-landing-card-button">
                      <button
                        className="btn btn-success"
                        onClick={acceptHandler}
                      >
                        Accept
                      </button>
                    </div>
                    <div className="a-landing-card-button">
                      <button
                        className="btn btn-danger a-landing-card-button"
                        onClick={rejectHandler}
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequestPageCard;
