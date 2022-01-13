import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section id="features">
      <div className="a-psuedo-container">
        <h1 className="a-heading">
          Features
          <div className="a-left"></div>
          <div className="a-right"></div>
        </h1>
      </div>

      <div className="container mt-5">
        <div className="row  a-features-container">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </section>
  );
}

export default Features;
