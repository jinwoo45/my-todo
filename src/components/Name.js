import React, { useState } from "react";
import "./Name.css";
import { TiPencil } from "react-icons/ti";

const Name = ({ userName, onChange, onSubmit, hello }) => {
  return (
    <div className="nameBox">
      <div>What's your name?</div>
      <form onSubmit={onSubmit}>
        <input value={userName} onChange={onChange}></input>
        <button type="submit">
          <TiPencil />
        </button>
      </form>
      <div>{hello}</div>
    </div>
  );
};
export default Name;
