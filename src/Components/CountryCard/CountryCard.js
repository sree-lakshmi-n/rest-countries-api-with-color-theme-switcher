import React from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import "./CountryCard.css";

export default function CountryCard(props) {
  return (
    <FlexWrapper className="country-card">
      <div className="country-flag-wrapper">
        <img src={props.flag} className="country-flag" alt="country's flag " />
      </div>
      <div className="country-details-wrapper">
        <p className="country-name">{props.name}</p>
        <FlexWrapper className="country-details">
          <p className="country-population">
            Population:{" "}
            <span className="country-population-value">{props.population}</span>
          </p>
          <p className="country-region">
            Region: <span className="country-region-value">{props.region}</span>
          </p>
          <p className="country-capital">
            Capital:{" "}
            <span className="country-capital-value">{props.capital}</span>
          </p>
        </FlexWrapper>
      </div>
    </FlexWrapper>
  );
}
