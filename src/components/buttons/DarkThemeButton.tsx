import React from "react";
import "./Buttons.css";
export default function DarkThemeButton() {
  return (
    <>
      <label className='switch'>
        <input type={"checkbox"} />
        <span className='slider round'></span>
      </label>
    </>
  );
}
