import RadioButton from "./RadioButton";

const CreateBottomRadioPart = (props) => {
  return (
    <section>
      <div className="row">
        <div className="col-6">
          <label htmlFor="input">{props.name}</label>
        </div>
        <div className="col-6">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <RadioButton name="Fixed" />
              </div>
              <div className="col-6">
                <RadioButton name="Variable" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateBottomRadioPart;
