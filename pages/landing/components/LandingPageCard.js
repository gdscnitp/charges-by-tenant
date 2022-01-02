import LandingCardButton from "./LandingCardButton";
import LandingCardContent from "./LandingCardContent";
import HorizontalLine from "./HorizontalLine";

function LandingPageCard() {
  return (
    <section className="a-card">
      <div class="container shadow-lg text-white a-landing-card mt-5" style={{ width: "65vw" }}>
        <div class="row justify-content-md-center p-3">
          <div class="col col-lg-4 a-image-container">
            <img
              className="card-img-top a-landing-card-image"
              src="/images/homePage.png"
              alt="Card image cap" />
          </div>
          <div class="col col-lg-8">
            <div className="card-body a-card-body">
              <h5 className="card-title a-landing-card-title">
                <span className="a-landing-card-heading"> Alias Name: </span>
                <span className="a-landing-card-data">Home2</span>
              </h5>
              <p className="card-text">
                <div className="container">
                  <LandingCardContent
                    leftHeading="Owner"
                    rightdata="Vivek Khan"
                  />
                  <LandingCardContent leftHeading="Rent" rightdata="15000/-" />
                  <LandingCardContent
                    leftHeading="Address"
                    rightdata="
                    Flat no. 108, Lakshmipuram Society"
                  />
                </div>
              </p>
              <div className="container">
                <div className="a-button-container">
                  <LandingCardButton
                    classNameProp="btn-warning"
                    name="Details"
                  />
                  <LandingCardButton
                    classNameProp="btn-warning a-margin-left"
                    name="History"
                  />
                  <LandingCardButton
                    classNameProp="btn-success px-2"
                    name="Paid"
                  />
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
