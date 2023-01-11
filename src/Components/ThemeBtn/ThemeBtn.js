import React from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import "./ThemeBtn.css";

export default function ThemeBtn(props) {
  return (
    <FlexWrapper className="btn-theme">
      <span className="theme-icon">
        <ion-icon
          name={`${props.isDarkMode ? "sunny" : "moon"}-outline`}
        ></ion-icon>
      </span>
      <span className="theme-name">{`${
        props.isDarkMode ? "Light" : "Dark"
      } mode`}</span>
    </FlexWrapper>
  );
}
