function LandingCardContent(props) {
  return (
    <div className="row">
      <span className="col-4 a-landing-card-heading">{props.leftHeading}:</span>
      <span className="col-8 a-landing-card-data">{props.rightdata}</span>
    </div>
  );
}

export default LandingCardContent;
