import React from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import "./Header.css";

export default function Header(props) {
  return (
    <div
      className={`header ${
        props.isDarkMode ? "header__dark" : "header__light"
      }`}
    >
      <FlexWrapper className="header-content">
        <h1 className="header__title">Where in the world?</h1>
        <ThemeBtn />
      </FlexWrapper>
    </div>
  );
}
