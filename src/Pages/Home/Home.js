import React, { useState } from "react";
import CountryCardWrapper from "../../Components/CountryCardWrapper/CountryCardWrapper";
import FilterWrapper from "../../Components/FilterWrapper/FilterWrapper";
import Header from "../../Components/Header/Header";
import "./Home.css";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [url, setUrl] = useState("https://restcountries.com/v2/all");

  const themeChangeHandler = (theme) => {
    setIsDarkMode(theme);
  };
  const urlChangeHandler = (changedUrl) => {
    setUrl(changedUrl);
  };

  return (
    <div className={`container ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <Header onThemeChange={themeChangeHandler} theme={isDarkMode} />
      <FilterWrapper onInputChange={urlChangeHandler} />
      <CountryCardWrapper theme={isDarkMode} url={url} />
    </div>
  );
}
