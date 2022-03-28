import { useRouter } from "next/router";
import NormalBootstrapButton from "./NormalBootstrapButton";

function LandingCardButton(props) {
  const router = useRouter();
  const goToDetailsPage = () => {
    router?.push(props.link);
  };
  return (
    <div className="a-landing-card-button" onClick={goToDetailsPage}>
      <NormalBootstrapButton
        classNameProp={props.classNameProp}
        name={props.name}
      />
    </div>
  );
}

export default LandingCardButton;
