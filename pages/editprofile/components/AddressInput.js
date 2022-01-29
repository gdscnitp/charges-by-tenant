import AfterEditAddress from "./AfterEditAddress";
import { useState } from "react";

function AddressInput(props) {
  const [address, setAddress] = useState({
    first_line: props.details?.content?.first_line,
    landmark: props.details?.content?.landmark,
    city: props.details?.content?.city,
    state: props.details?.content?.state,
    country: props.details?.content?.country,
    pincode: props.details?.content?.pincode,
  });

  const handleInput = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
    console.log(address);
  };

  const submitHandler = () => {
    props.pushAddress(address);
  };
  return (
    <div>
      <div className="row a-edit-content a-row-wrapper">
        <div className="col-lg-12 col-sm-12">
          <div className="a-title-small">Address</div>
        </div>
      </div>
      <div className="container">
        <AfterEditAddress
          title="First Line"
          name="first_line"
          content={
            props.details?.content?.first_line == "Not Provided"
              ? ""
              : props.details?.content?.first_line
          }
          onChange={handleInput}
        />
        <AfterEditAddress
          title="Landmark"
          name="landmark"
          content={
            props.details?.content?.landmark == "Not Provided"
              ? ""
              : props.details?.content?.landmark
          }
          onChange={handleInput}
        />
        <AfterEditAddress
          title="City"
          name="city"
          content={
            props.details?.content?.city == "Not Provided"
              ? ""
              : props.details?.content?.city
          }
          onChange={handleInput}
        />
        <AfterEditAddress
          title="State"
          name="state"
          content={
            props.details?.content?.state == "Not Provided"
              ? ""
              : props.details?.content?.state
          }
          onChange={handleInput}
        />
        <AfterEditAddress
          title="Country"
          name="country"
          content={
            props.details?.content?.country == "Not Provided"
              ? ""
              : props.details?.content?.country
          }
          onChange={handleInput}
        />
        <AfterEditAddress
          title="Pincode"
          name="pincode"
          content={
            props.details?.content?.pincode == 0
              ? ""
              : props.details?.content?.pincode
          }
          onChange={handleInput}
        />
      </div>
      <div className="a-flex-buttons">
        <button
          className="btn btn-primary a-save-button"
          onClick={submitHandler}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-outline-danger a-cancel-button"
          onClick={props.cancelClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddressInput;
