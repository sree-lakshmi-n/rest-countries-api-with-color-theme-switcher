import "./RegionFilter.css";
import React from "react";

export default function RegionFilter(props) {
  const selectChangeHandler = (event) => {
    const continent = event.target.value;
    if (continent === "0") {
      props.onInputChange("https://restcountries.com/v3.1/all");
    } else {
      props.onInputChange(`https://restcountries.com/v3.1/region/${continent}`);
    }
  };
  return (
    <div className="region-filter">
      <select className="region-select" onChange={selectChangeHandler}>
        <option value={"0"}>Filter By Region</option>
        <option value={"Africa"}>Africa</option>
        <option value={"America"}>America</option>
        <option value={"Asia"}>Asia</option>
        <option value={"Europe"}>Europe</option>
        <option value={"Oceania"}>Oceania</option>
      </select>
    </div>
  );
}
