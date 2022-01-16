function HomePageBanner() {
  return (
    <section>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
      <div className="a-parent">
        <div className="a-text a-head-text">
          Help you book & live in properties at ease
        </div>
      </div>
      <a href="#getStarted">
        <button className="a-start-button" role="a-button">
          Get Started
        </button>
      </a>
      <a href="#features">
        <div className="a-arrow">
          <i className="fab fa-vuejs a-arrow-icon"></i>
        </div>
      </a>
    </section>
  );
}

export default HomePageBanner;
