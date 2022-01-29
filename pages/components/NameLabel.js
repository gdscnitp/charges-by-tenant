import React from "react";

const NameLabel = (props) => {
  return (
    <div>
      <span className="p_label">{props.label}</span>
      <span>{props.details}</span>
    </div>
  );
};

export default NameLabel;
