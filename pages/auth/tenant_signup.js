import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Tenant from "../../public/images/tenant.png";
import Home_fill from "../../public/images/Home_fill.png";
import Ellipse47 from "../../public/images/Ellipse47.png";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import { Store } from "../../utility/Store";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";

function Tenant_Signup() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const { redirect } = router.query;
  const { dispatch, state } = useContext(Store);
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
  });

  // temp comment

  const [check, setCheck] = useState({
    isChecked: false,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setCheck({
      ...check,
      [e.target.name]: value,
    });
  };

  const onChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(details);
  };

  if (state.userInfo) {
    router.push("/profile/tenant");
  }

  const submitHandler = async (details) => {
    closeSnackbar();
    try {
      const { data } = await axios.post("/api/auth/users/register", details);
      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", JSON.stringify(data));
      enqueueSnackbar("User Signed Up Successfully", { variant: "success" });
      router.push(redirect || "/profile/tenant");
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
  };

  return (
    <>
      <div className="main">
        <section className="signup">
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <div className="container pr_container praj">
            <Link href="/homepage/HomePage">
              <div className="returnHome">
                <div className="fish">
                  <Image src={Home_fill} alt="sub" />
                </div>
                <div className="fishes">
                  <Image src={Ellipse47} alt="sub" />
                </div>
              </div>
            </Link>
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title pr_form-title">Tenant Sign up</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <div className="form-group pr_form-group">
                    <label className="pr_label" htmlFor="firstName">
                      <i className="fas fa-user"></i>
                    </label>
                    <input
                      className="pa_input"
                      type="text"
                      name="firstName"
                      id="firstName"
                      onChange={(e) => onChange(e)}
                      placeholder="Your First Name"
                    />
                  </div>
                  <div className="form-group pr_form-group">
                    <label className="pr_label" htmlFor="lastName">
                      <i className="fas fa-user"></i>
                    </label>
                    <input
                      className="pa_input"
                      type="text"
                      name="lastName"
                      id="lastName"
                      onChange={(e) => onChange(e)}
                      placeholder="Your Last Name"
                    />
                  </div>
                  <div className="form-group pr_form-group">
                    <label className="pr_label" htmlFor="email">
                      <i className="fas fa-envelope"></i>
                    </label>
                    <input
                      className="pa_input"
                      type="text"
                      name="email"
                      id="email"
                      onChange={(e) => onChange(e)}
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group pr_form-group">
                    <label className="pr_label" htmlFor="contact">
                      <i className="fas fa-phone-square-alt"></i>
                    </label>
                    <input
                      className="pa_input"
                      type="text"
                      name="contact"
                      id="contact"
                      onChange={(e) => onChange(e)}
                      placeholder="Your Contact"
                    />
                  </div>
                  {/* <div className="form-group pr_form-group">
                    <label className='pr_label' htmlFor="pass"><i className="fas fa-lock"></i></label>
                    <input className='pa_input' type="password" name="pass" id="pass" placeholder="Password" />
                  </div>
                  <div className="form-group pr_form-group">
                    <label className='pr_label' htmlFor="re-pass"><i className="fas fa-lock"></i></label>
                    <input className='pa_input' type="password" name="re_pass" id="re_pass" placeholder="Re-enter password" />
                  </div> */}
                  <div className="custom-control custom-checkbox pt-5">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                      name="isChecked"
                      checked={state.isChecked}
                      onChange={handleChange}
                    />
                    <label
                      className="custom-control-label p_agree"
                      htmlFor="customCheck1"
                    >
                      I agree to all
                      <a href="#" className="terms">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                  <div>
                    <div className="form-group pr_form-group form-button pr_form-button">
                      <button
                        type="submit"
                        onClick={(e) => onSubmit(e)}
                        className=" btn btn-primary pr_form-submit"
                        value="Sign Up"
                        disabled={check.isChecked ? false : true}
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <Image src={Tenant} height={610} width={660} alt="tenant" />{" "}
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Tenant_Signup;
