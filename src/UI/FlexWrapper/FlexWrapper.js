import React from "react";
import "./FlexWrapper.css";

export default function FlexWrapper(props) {
  return (
    <div className={`flex-wrapper ${props.className}`}>{props.children}</div>
  );
}
