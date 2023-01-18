import React, { useState } from "react";
import CountryCardWrapper from "../../Components/CountryCardWrapper/CountryCardWrapper";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./Home.css";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeChangeHandler = (theme) => {
    setIsDarkMode(theme);
  };
  return (
    <div className={`container ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <Header onThemeChange={themeChangeHandler} theme={isDarkMode} />
      <SearchBar />
      <CountryCardWrapper theme={isDarkMode} />
    </div>
  );
}
