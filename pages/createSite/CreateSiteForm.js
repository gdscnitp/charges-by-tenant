import HorizontalInput from "./HorizontalInput";
import RadioButton from "./RadioButton";
import VerticalInput from "./VerticalInput";
import StateOptions from "./StateOptions";
import Header from "./Header";
import CreateBottomRadioPart from "./CreateBottomRadioPart";
import NormalBootstrapButton from "./NormalBootstrapButton";
import MyModal from "./MyModal";
import Image from "next/image";

function CreateSiteForm() {
  return (
    // <!-- Bootstrap CSS -->
    // <section className="a-create-side-main text-white">
    <section className="a-create-side-main">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />

      <div className="a-create-site-upper">
        <div className="row">
          <div className="col-3 a-left-div"></div>
          <div className="col-9">
            <Header header="Enter Site Details" />
            <div className="container">
              <form>
                <div className="row">
                  <div className="form-group col-md-6">
                    <VerticalInput name="Alias name" />
                  </div>

                  <div className="form-group col-md-6 py-3">
                    <label htmlFor="input">Type</label>

                    <div className="container py-3">
                      <div className="row">
                        <div className="col-3">
                          <RadioButton name="Room" />
                        </div>
                        <div className="col-3">
                          <RadioButton name="Land" />
                        </div>
                        <div className="col-3">
                          <RadioButton name="Shop" />
                        </div>
                        <div className="col-3">
                          <RadioButton name="Other" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-md-6">
                    <VerticalInput name="Rent" />
                  </div>
                  <div className="form-group col-md-6">
                    <VerticalInput name="Deposit" />
                  </div>
                </div>

                <div className="a-address-container">
                  <HorizontalInput name="Flat no:" />
                  <HorizontalInput name="Street:" />
                  <div className="row">
                    <div className="col-6">
                      <HorizontalInput name="City:" />
                    </div>
                    <div className="col-6">
                      <HorizontalInput name="Zip:" />
                    </div>
                  </div>

                  <div className="form-group col-md-4">
                    <div className="form-group row">
                      <div className="col-4">
                        <label htmlFor="inputState">State</label>
                      </div>
                      <div className="col-8">
                        <StateOptions />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <Header header="Custom Bills (Monthly)" />

            <div className="a-monthly-container container">
              <div className="container a-create-bottom-radio-container">
                <CreateBottomRadioPart name="Electricity" />
                <CreateBottomRadioPart name="Water" />
              </div>
            </div>

            <div className="addField-container">
              {/* <NormalBootstrapButton
                name="Add Field"
                classNameProp="btn-warning a-right-align-button"
              /> */}
              <MyModal
                buttonName="Add Field"
                fieldName="Enter the field name:"
                placeholderProp="Amount"
                classNameProp="a-right-align-button"
              />
            </div>
            <div className="a-finalButton-container">
              <NormalBootstrapButton
                name="Generate Site"
                classNameProp="btn-warning a-final-generateButton"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateSiteForm;
