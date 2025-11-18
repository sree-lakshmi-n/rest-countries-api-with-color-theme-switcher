import "./RegionFilter.css";
import React from "react";

export default function RegionFilter(props) {
  const selectChangeHandler = (event) => {
    const continent = event.target.value;
    props.onInputChange(`https://restcountries.com/v3.1/region/${continent}`);
    props.regionChangeHandler(continent);
  };
  return (
    <div className="region-filter">
      <select className="region-select" onChange={selectChangeHandler}>
        <option value={"Asia"}>Asia</option>
        <option value={"Africa"}>Africa</option>
        <option value={"America"}>America</option>
        <option value={"Europe"}>Europe</option>
        <option value={"Oceania"}>Oceania</option>
      </select>
    </div>
  );
}
