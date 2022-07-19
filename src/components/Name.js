import React, { useState } from "react";

const Name = ({ userName, onChange, onSubmit, hello }) => {
  return (
    <div>
      <div>what's your name?</div>
      <form onSubmit={onSubmit}>
        <input value={userName} onChange={onChange}></input>
        <button type="submit">+</button>
      </form>
      <div>{hello}</div>
    </div>
  );
};
export default Name;
