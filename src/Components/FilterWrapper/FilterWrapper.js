import "./FilterWrapper.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";

export default function FilterWrapper(props) {
  return (
    <div>
      <SearchBar onInputChange={props.onInputChange} />
    </div>
  );
}
