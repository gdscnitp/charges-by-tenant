import Image from "next/image";
import Tenant from "../../public/images/tenant.png";
import Home_fill from "../../public/images/Home_fill.png";
import Ellipse47 from "../../public/images/Ellipse47.png";

function tenant_signin() {
  return (
    <>
      <div className="main1">
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous" />
        <link rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
        <section className="sign-in">
          <div className="container pr_container prj">
            <div className="fish1">
              <img src={Home_fill} alt="sub" />
            </div>
            <div className="fishes1">
              <img src={Ellipse47} alt="sub" />
            </div>
            <div className="signin-content">
              <div className="signin-image">
                <figure><img src={Tenant} height={428} width={500} alt="sign up image" /></figure>
              </div>
              <div className="signin-form">
                <h2 className="form-title pr_form-title">Tenant Sign In</h2>
                <form method="POST" className="register-form" id="login-form">
                  <div className="form-group pr_form-group">
                    <label htmlFor="your_name"><i className="fas fa-user"></i></label>
                    <input type="text" name="your_name" id="your_name" placeholder="Your Name" />
                  </div>
                  <div className="form-group pr_form-group">
                    <label htmlFor="your_pass"><i className="fas fa-lock"></i></label>
                    <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
                  </div>
                  <div className="custom-control custom-checkbox pt-5">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label p_remember" htmlFor="customCheck1">Remember Me</label>
                  </div>
                  <div className="form-group pr_form-group form-button pr_form-button">
                    <input type="submit" name="signin" id="signin" className="form-submit" value="Sign In" />
                  </div>
                  <div className='p_mem'>Not a member? <a href='#'>Sign Up</a></div>
                </form>
                <div className="social-login">
                  <span className="social-label">Or login with</span>
                  <ul className="socials">
                    <li><a href="#"><i className=" fab fa-facebook-square fa-3x "></i></a></li>
                    <li><a href="#"><i className=" fab fa-twitter fa-3x"></i></a></li>
                    <li><a href="#"><i className="zmdi-google fab fa-google fa-3x"></i></a></li>
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
