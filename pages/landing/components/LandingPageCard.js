import LandingCardButton from "./LandingCardButton";
import LandingCardContent from "./LandingCardContent";
import HorizontalLine from "./HorizontalLine";

function LandingPageCard(props) {
  return (
    <section className="a-card">
      <div
        className={`container shadow-lg text-white a-landing-card mt-5 ${props.cclass}`}
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
                <span className="a-landing-card-data">{props.alias}</span>
              </h5>
              <div className="card-text">
                <div className="container">
                  <LandingCardContent
                    leftHeading="Owner"
                    rightdata={props.owner}
                  />
                  <LandingCardContent leftHeading="Rent" rightdata="15000/-" />
                  <LandingCardContent
                    leftHeading="Address"
                    rightdata={props.address}
                  />
                </div>
              </div>
              <div className="container">
                <div>
                  <div className="a-button-container">
                    <LandingCardButton
                      classNameProp={props.class1}
                      name={props.text1}
                    />
                    <LandingCardButton
                      classNameProp={props.class2}
                      name={props.text2}
                    />
                    <LandingCardButton
                      classNameProp={props.class3}
                      name={props.text3}
                    />
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
