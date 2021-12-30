import Image from "next/image";
import tenant from "../../public/images/tenant.png";
import Home_fill from "../../public/images/Home_fill.png";
import Ellipse47 from "../../public/images/Ellipse47.png";

function tenant_signup() {
  return (
    <>
      <section className="p_background-tenant-signin">
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
          <div className="disp">Tenant Sign Up</div>
          <div className="p_form-group">
            <i class="fa fa-user"></i>
            <input
              className="p_input"
              type="text"
              name="name"
              id="name"
              autocomplete="off"
              placeholder="Full name"
            />
          </div>
          <div className="p_form-group">
            <i class="fas fa-envelope"></i>
            <input
              className="p_input"
              type="text"
              name="email"
              id="email"
              autocomplete="off"
              placeholder="Email address"
            />
          </div>
          <div className="p_form-group">
            <i class="fas fa-phone-square-alt"></i>
            <input
              className="p_input"
              type="text"
              name="contact"
              id="contact"
              autocomplete="off"
              placeholder="Contact No"
            />
          </div>
          <div className="p_form-group">
            <i class="fas fa-lock"></i>
            <input
              className="p_input"
              type="password"
              name="password"
              id="password"
              autocomplete="off"
              placeholder="Password"
            />
          </div>
          <div className="p_btn1">
            <button id="p_btn1">Sign Up</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default tenant_signup;
