import SignInCard from "./SignInCard";

function GetStarted() {
  return (
    <section id="getStarted">
      <div className="a-psuedo-container">
        <h1 className="a-heading">
          Get Started
          <div className="a-left"></div>
          <div className="a-right"></div>
        </h1>
      </div>

      <div className="container a-display-flex-cards mt-5 mb-5">
        <SignInCard
          pathOfImage="/images/Tenant.svg"
          content="Sign in as a Tenant and use the helpful features from our website. Get notified for all the payments and history."
          name="Tenant"
          path="/auth/tenant_signin"
        />
        <SignInCard
          pathOfImage="/images/Landlord.svg"
          content="Sign in as a Landlord and use the helpful features from our website. Keep track of all the payments"
          name="Landlord"
          path="/auth/tenant_signin"
        />
      </div>
    </section>
  );
}

export default GetStarted;
