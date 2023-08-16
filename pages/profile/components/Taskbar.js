import Icons from "./Icons";
import Link from "next/link";
import LogOut from "./LogOut";
const Taskbar = () => {
  return (
    <div className="S_left">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />

      <Icons
        classprop="fad fa-user-circle S_icon S_icon0"
        path="/profile/tenant"
      ></Icons>
      <Icons
        classprop="fal fa-home-lg-alt S_icon S_icon1"
        path="/landing/tenant"
      ></Icons>
      {/* <Icons
        classprop="fal fa-grip-lines-vertical S_icon S_icon2"
        path="/charges/totalCharges"
      ></Icons> */}
      <Icons
        classprop="fal fa-rupee-sign S_icon S_icon3"
        path="/transaction/TenantHistory"
      ></Icons>
      <Icons
        classprop="fal fa-grip-lines-vertical S_icon S_icon2"
        path="/landing/viewAllCharges"
      ></Icons>
      <LogOut classprop="fal fa-sign-out S_icon S_icon5"></LogOut>
    </div>
  );
};

export default Taskbar;
