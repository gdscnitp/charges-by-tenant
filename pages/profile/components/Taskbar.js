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
      {/* <Icons
        path="/profile/tenant"
        ></Icons>
        <Icons
      path="/landing/tenant"
      ></Icons>
      <Icons
      path="/charges/generateCharges"
      ></Icons>
      <Icons
      path="/createSite/CreateSiteForm"
      ></Icons>
      <Icons
      path="/landing/AllChargesHistory"
      ></Icons>
      {Cookies.get("userInfo") ? (
        <LogOut classprop="fas fa-sign-out-alt S_icon S_icon5"></LogOut>
      ) : (
        ""
      )} */}
      <Icons
        classprop="fad fa-user-circle S_icon S_icon0"
        // classprop="fad fa-user-circle S_icon S_icon0"
        path="/profile/tenant"
      ></Icons>
      <Icons
        classprop="fas fa-house-damage S_icon S_icon1"
        // classprop="fal fa-home-lg-alt S_icon S_icon1"
        path="/landing/tenant"
      ></Icons>
      {/* <Icons
        classprop="fas fa-file-invoice-dollar S_icon S_icon2"
        // classprop="fal fa-grip-lines-vertical S_icon S_icon2"
        path="/charges/totalCharges"
      ></Icons> */}
      <Icons
        classprop="fas fa-money-bill-alt S_icon S_icon4"
        // classprop="fal fa-rupee-sign S_icon S_icon3"
        path="/transaction/TenantHistory"
      ></Icons>
      <Icons
        classprop="far fa-plus-square S_icon S_icon3"
        path="/landing/viewAllCharges"
      ></Icons>
      <LogOut classprop="fas fa-sign-out-alt S_icon S_icon5"></LogOut>
    </div>
  );
};

export default Taskbar;
