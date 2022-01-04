import Image from "next/image";
import tenant from "../../public/images/tenant.png";
import Home_fill from "../../public/images/Home_fill.png";
import Ellipse47 from "../../public/images/Ellipse47.png";
import Twitter from "../../public/images/Twitter.png";
import Facebook from "../../public/images/Facebook.png";
import Google from "../../public/images/Google.png";

function tenant_signin() {
  return (
    <>
      <section className="p_background-tenant">
        <div className="fish">
          <Image src={Home_fill} alt="sub" />
        </div>
        <div className="fishes">
          <Image src={Ellipse47} alt="sub" />
        </div>
        <div className="p_img">
          <Image src={tenant} alt="tenant" />
        </div>
        <div className="side">
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossorigin="anonymous"
          />
          <div className="disp">Tenant Sign In</div>
          <div className="p_form-group">
            <i className="fas fa-user"></i>
            <input
              className="p_input"
              type="text"
              name="name"
              id="name"
              autocomplete="off"
              placeholder="Email Address"
            />
          </div>
          <div className="p_form-group">
            <i className="fas fa-lock"></i>
            <input
              className="p_input"
              type="password"
              name="password"
              id="password"
              autocomplete="off"
              placeholder="Password"
            />
          </div>
          <div className="p_btn">
            <button className="p_btn1 p_btr">Sign In</button>
          </div>
          <div className="p_icon">
            <div className="p_icon2">or signIn with</div>
            <div className="p_icon1">
              <Image src={Facebook} alt="sub" height={27} width={48} />
            </div>
            <div className="p_icon1">
              <Image src={Google} alt="sub" height={15} width={45} />
            </div>
            <div className="p_icon1">
              <Image src={Twitter} alt="sub" height={27} width={48} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default tenant_signin;
