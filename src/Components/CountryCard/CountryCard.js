import React from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import "./CountryCard.css";

export default function CountryCard() {
  return (
    <FlexWrapper className="country-card">
      <div className="country-flag-wrapper">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
          }
          className="country-flag"
          alt="country's flag "
        />
      </div>
      <div className="country-details-wrapper">
        <p className="country-name">India</p>
        <FlexWrapper className="country-details">
          <p className="country-population">
            Population:{" "}
            <span className="country-population-value">81,770,900</span>
          </p>
          <p className="country-region">
            Region: <span className="country-region-value">Asia</span>
          </p>
          <p className="country-capital">
            Capital: <span className="country-capital-value">New Delhi</span>
          </p>
        </FlexWrapper>
      </div>
    </FlexWrapper>
  );
}
