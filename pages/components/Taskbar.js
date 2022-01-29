import Icons from "./Icons";

const Taskbar = () => {
  return (
    <div className="S_left">
      <Icons classprop="fad fa-user-circle S_icon S_icon0"></Icons>
      <Icons classprop="fal fa-home-lg-alt S_icon S_icon1"></Icons>
      <Icons classprop="fal fa-grip-lines-vertical S_icon S_icon2"></Icons>
      <Icons classprop="fal fa-rupee-sign S_icon S_icon3"></Icons>
      <Icons classprop="fad fa-snowman S_icon S_icon4"></Icons>
      <Icons classprop="fal fa-sign-out S_icon S_icon5"></Icons>
    </div>
  );
};

export default Taskbar;
