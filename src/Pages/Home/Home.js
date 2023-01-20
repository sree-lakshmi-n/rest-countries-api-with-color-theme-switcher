import React, { useState, useEffect } from "react";
import CountryCardWrapper from "../../Components/CountryCardWrapper/CountryCardWrapper";
import FilterWrapper from "../../Components/FilterWrapper/FilterWrapper";
import Header from "../../Components/Header/Header";
import "./Home.css";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [url, setUrl] = useState("https://restcountries.com/v2/all");

  const [countriesList, setCountriesList] = useState("");

  const [checkList, setCheckList] = useState([
    { param: "currencies", status: false },
    { param: "languages", status: false },
    { param: "borders", status: false },
  ]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setCountriesList(data);
      })
      .catch((err) => setCountriesList(""));
  }, [url, checkList]);

  const themeChangeHandler = (theme) => {
    setIsDarkMode(theme);
  };
  const urlChangeHandler = (changedUrl) => {
    setUrl(changedUrl);
  };
  const checkboxInputHandler = (checks) => {
    setCheckList([...checks]);
  };
  return (
    <div className={`container ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <Header onThemeChange={themeChangeHandler} theme={isDarkMode} />
      <FilterWrapper
        onInputChange={urlChangeHandler}
        checkList={checkList}
        onCheckboxInput={checkboxInputHandler}
      />
      {countriesList && (
        <CountryCardWrapper
          theme={isDarkMode}
          url={url}
          countriesList={countriesList}
          checkList={checkList}
        />
      )}
      {!countriesList && <p className="msg__not-found">No countries found</p>}
    </div>
  );
}
