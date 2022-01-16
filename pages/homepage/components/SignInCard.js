import Image from "next/image";

const SignInCard = (props) => {
  return (
    <div className="a-signin-cards p-2">
      <div className="card a-signin-cards-width">
        <Image
          height={"300px"}
          width={"40px"}
          className="card-img-top a-signin-cards-image"
          src={props.pathOfImage}
          alt="Card image cap"
        />
        <div className="card-body a-card-inner-text">
          <p className="card-text" style={{ color: "white" }}>
            {props.content}
          </p>
          <div className="a-make-center mt-4">
            <button className="btn a-signin-card-button">
              <span>{props.name}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInCard;
