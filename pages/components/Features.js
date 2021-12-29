import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section>
      <div className="a-psuedo-container">
        <h1 className="a-heading">
          Features
          <div className="a-left"></div>
          <div className="a-right"></div>
        </h1>
      </div>

      <div class="container mt-5">
        <div class="row  a-features-container">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </section>
  );
}

export default Features;
