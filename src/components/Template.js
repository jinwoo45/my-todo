import React from "react";
import "./Template.css";

const Template = ({ children, todoLength, userName }) => {
  return (
    <div className="Template">
      <div className="title">TO DO LIST ({todoLength})</div>
      <div>{children}</div>
    </div>
  );
};
export default Template;
