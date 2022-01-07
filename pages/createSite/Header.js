import React from "react";

const Header = (props) => {
  return (
    <div className="a-head-container">
      <div className="a-top-head">{props.header}</div>;
    </div>
  );
};

export default Header;
