import NormalBootstrapButton from "./NormalBootstrapButton";

function LandingCardButton(props) {
  return (
    <div className="a-landing-card-button">
      <NormalBootstrapButton
        classNameProp={props.classNameProp}
        name={props.name}
      />
    </div>
  );
}

export default LandingCardButton;
