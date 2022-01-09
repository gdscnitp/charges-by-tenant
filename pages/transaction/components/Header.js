import React from "react";

const Header = (props) => {
  return (
    <div>
      <div className={`${props.headClass}`}>{props.head}</div>
    </div>
  );
};

export default Header;
