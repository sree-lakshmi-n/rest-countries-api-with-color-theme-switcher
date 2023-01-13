import React from "react";
import "./ThemeBtn.css";

export default function ThemeBtn(props) {
  const themeBtnClickHandler = (event) => {
    props.theme ? props.onThemeChange(false) : props.onThemeChange(true);
  };
  return (
    <button className="btn-theme" onClick={themeBtnClickHandler}>
      <span className="theme-icon">
        <ion-icon name={`${props.theme ? "sunny" : "moon"}-outline`}></ion-icon>
      </span>
      <span className="theme-name">{`${
        props.theme ? "Light" : "Dark"
      } mode`}</span>
    </button>
  );
}
