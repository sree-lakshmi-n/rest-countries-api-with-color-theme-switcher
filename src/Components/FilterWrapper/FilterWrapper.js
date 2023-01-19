import "./FilterWrapper.css";
import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import RegionFilter from "../RegionFilter/RegionFilter";
import Checkbox from "../Checkbox/Checkbox";

export default function FilterWrapper(props) {
  const checkHandler = (event) => {
    props.checkList.map((ele) => {
      if (ele.param == event.target.value) {
        ele.status = !ele.status;
        props.onCheckboxInput(props.checkList);
      }
    });
  };
  return (
    <div>
      <SearchBar onInputChange={props.onInputChange} />
      <RegionFilter onInputChange={props.onInputChange} />
      <Checkbox onChecked={checkHandler} params={props.checkList} />
    </div>
  );
}
