import React from "react";
import "./Template.css";

const Template = ({ children, todoLength, userName }) => {
  let now = new Date();

  let todayMonth = now.getMonth() + 1;
  let todayDate = now.getDate();

  const week = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
  let dayOfWeek = week[now.getDay()];

  return (
    <div className="Template">
      <div className="title">
        <div>TO DO LIST ({todoLength})</div>
        <div className="date">
          {todayMonth}/{todayDate} {dayOfWeek}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Template;
