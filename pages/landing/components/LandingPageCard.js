import LandingCardButton from "./LandingCardButton";
import LandingCardContent from "./LandingCardContent";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import axios from "axios";

function LandingPageCard(props) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();

  const leaveSite = async () => {
    console.log();
    closeSnackbar();
    let config = {
      headers: {
        authorization: "b " + JSON.parse(Cookies.get("userInfo")).data.token,
      },
    };
    try {
      var leaveObject = { histId: props.leave_id };
      console.log(leaveObject);
      axios.post("/api/profile/leavesite", leaveObject, config).then((res) => {
        console.log(res);
        if (res.data?.success) {
          enqueueSnackbar("Site left", { variant: "success" });
          router.push("/profile/tenant");
        }
      });
    } catch (err) {
      enqueueSnackbar(err.response?.data?.message, { variant: "error" });
    }
  };

  const leaveHandler = () => {
    leaveSite();
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
                <span className="a-landing-card-heading"> Site Name: </span>
                <span className="a-landing-card-data">{props.alias}</span>
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
                    <div>
                      <div className="row">
                        <div className="col">
                          <LandingCardButton
                            classNameProp={props.class1}
                            name={props.text1}
                            link={`/charges/ParticularSiteCharges?site_id=${props.site_id}&name=${props.alias}`}
                          />
                        </div>
                        <div className="col">
                          <LandingCardButton
                            classNameProp={props.class2}
                            name={props.text2}
                          />
                        </div>
                        <div className="col">
                          {/* <LandingCardButton
                            classNameProp={props.class3}
                            name={props.text3}
                          /> */}
                        </div>
                        <div className="col">
                          <button
                            className="btn btn-danger a-landing-card-button"
                            onClick={leaveHandler}
                          >
                            Leave
                          </button>
                        </div>
                      </div>
                      {/* <LandingCardButton
                        classNameProp={props.class1}
                        name={props.text1}
                        link={`/charges/ParticularSiteCharges?site_id=${props.site_id}`}
                      />
                      <LandingCardButton
                        classNameProp={props.class2}
                        name={props.text2}
                      />
                      <LandingCardButton
                        classNameProp={props.class3}
                        name={props.text3}
                      />
                      <div className="a-landing-card-button">
                        <button
                          className="btn btn-danger a-landing-card-button"
                          onClick={leaveHandler}
                        >
                          Leave
                        </button>
                      </div> */}
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

export default LandingPageCard;
