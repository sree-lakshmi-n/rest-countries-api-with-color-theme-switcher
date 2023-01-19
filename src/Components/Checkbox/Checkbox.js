import "./Checkbox.css";
import React from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
export default function Checkbox(props) {
  return (
    <FlexWrapper className="checkbox-wrapper">
      {Array.from(props.params).map((param, index) => {
        return (
          <FlexWrapper className="checkbox" key={index}>
            <label htmlFor={param.param}>{param.param}</label>
            <input
              type={"checkbox"}
              value={param.param}
              onClick={props.onChecked}
            />
          </FlexWrapper>
        );
      })}
    </FlexWrapper>
  );
}
