import "./SearchBar.css";
import React from "react";

export default function SearchBar(props) {
  const inputChangeHandler = (event) => {
    const countryName = event.target.value;
    console.log(countryName);
    props.onInputChange(`https://restcountries.com/v2/name/${countryName}`);
  };
  return (
    <div>
      <ion-icon name="search-outline"></ion-icon>
      <input type="text" onInput={inputChangeHandler}></input>
    </div>
  );
}
