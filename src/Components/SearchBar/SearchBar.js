import "./SearchBar.css";
import React from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";

export default function SearchBar(props) {
  const inputChangeHandler = (event) => {
    const countryName = event.target.value;
    if (countryName) {
      props.onInputChange(`https://restcountries.com/v2/name/${countryName}`);
    } else {
      props.onInputChange(`https://restcountries.com/v3.1/region/${props.selectedRegion}`);
    }
  };
  return (
    <FlexWrapper className="search-bar">
      <ion-icon className="search-icon" name="search-outline"></ion-icon>
      <input
        type="text"
        onInput={inputChangeHandler}
        className="search-input"
        placeholder="Search for a country..."
      ></input>
    </FlexWrapper>
  );
}
