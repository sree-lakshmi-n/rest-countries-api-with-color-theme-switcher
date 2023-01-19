import "./Checkbox.css";
import React from "react";

export default function Checkbox(props) {
  return (
    <div className="checkbox-wrapper">
      {Array.from(props.params).map((param, index) => {
        return (
          <div className="checkbox" key={index}>
            <label htmlFor={param.param}>{param.param}</label>
            <input
              type={"checkbox"}
              value={param.param}
              onClick={props.onChecked}
            />
          </div>
        );
      })}
    </div>
  );
}
