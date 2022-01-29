import React from "react";

const NameLabel = (props) => {
  console.log(props.content);
  return (
    <div>
      <span className="p_label">{props.label}</span>
      <span>{props.details}</span>
    </div>
  );
};

export default NameLabel;
