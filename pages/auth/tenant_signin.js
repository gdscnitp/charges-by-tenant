import Image from "next/image";
import Tenant from "../../public/images/tenant.png";
import Home_fill from "../../public/images/Home_fill.png";
import Ellipse47 from "../../public/images/Ellipse47.png";
import Link from "next/link";

function tenant_signin() {
<<<<<<< Updated upstream
=======
  // anujjadhav0215@gmail.com
  // 9ty1976t

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const { redirect } = router.query;
  const { dispatch, state } = useContext(Store);

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(details);
  };

  const checkDetails = (details) => {
    id(details.email.length == 0);
  };

  if (state.userInfo) {
    router.push("/profile/tenant");
  }

  // const validateData = (details) => {
  //   if (!details.email) {
  //   }
  // };

  const submitHandler = async (details) => {
    closeSnackbar();
    // var correct = validateData(details);
    try {
      const res = await axios.post("/api/auth/users/signin", details);
      dispatch({ type: "USER_LOGIN", payload: res.data });
      Cookies.set("userInfo", JSON.stringify(res.data));
      enqueueSnackbar("User Signed In Successfully", { variant: "success" });
      router.push(redirect || "/profile/tenant");
    } catch (err) {
      console.log(err.response);
      enqueueSnackbar(err.response?.data?.message, { variant: "error" });
    }
  };

>>>>>>> Stashed changes
  return (
    <>
      <div className="main1">
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
        <section className="sign-in">
          <div className="container pr_container prj">
            <div className="fish1">
              <Image src={Home_fill} alt="sub" />
            </div>
            <div className="fishes1">
              <Image src={Ellipse47} alt="sub" />
            </div>
            <div className="signin-content">
              <div className="signin-image">
                <figure>
                  <Image
                    src={Tenant}
                    height={428}
                    width={500}
                    alt="sign up image"
                  />
                </figure>
              </div>
              <div className="signin-form">
                <h2 className="form-title pr_form-title">Tenant Sign In</h2>
                <form method="POST" className="register-form" id="login-form">
                  <div className="form-group pr_form-group">
                    <label className="pr_label" htmlFor="your_name">
                      <i className="fas fa-user"></i>
                    </label>
                    <input
                      className="pa_input"
                      type="text"
                      name="your_name"
                      id="your_name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group pr_form-group">
                    <label className="pr_label" htmlFor="your_pass">
                      <i className="fas fa-lock"></i>
                    </label>
                    <input
                      className="pa_input"
                      type="password"
                      name="your_pass"
                      id="your_pass"
                      placeholder="Password"
                    />
                  </div>
                  <div className="custom-control custom-checkbox pt-5">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label p_remember"
                      htmlFor="customCheck1"
                    >
                      <span className="disable">Remember Me</span>
                    </label>
                  </div>
                  <div>
                    <div className="form-group pr_form-group form-button pr_form-button">
                      <Link href="/landing/tenant">
                        <button
                          type="submit"
                          name="signin"
                          className=" btn btn-primary pr_form-submit"
                          value="Sign In"
                        >
                          Sign In
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="p_mem">
                    Not a member?
                    <Link href="/auth/tenant_signup">Sign Up</Link>
                  </div>
                </form>
                <div className="social-login">
                  <span className="social-label">Or login with</span>
                  <ul className="socials">
                    <li>
                      <a href="#">
                        <i className=" fab fa-facebook-square fa-3x "></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className=" fab fa-twitter fa-3x"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="zmdi-google fab fa-google fa-3x"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default tenant_signin;
