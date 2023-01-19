import "./FilterWrapper.css";
import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import RegionFilter from "../RegionFilter/RegionFilter";
import Checkbox from "../Checkbox/Checkbox";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";

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
    <FlexWrapper className="filter-wrapper">
      <SearchBar onInputChange={props.onInputChange} />
      <RegionFilter onInputChange={props.onInputChange} />
      <Checkbox onChecked={checkHandler} params={props.checkList} />
    </FlexWrapper>
  );
}
