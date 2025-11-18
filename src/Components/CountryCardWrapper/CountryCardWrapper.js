import React from "react";
import "./CountryCardWrapper.css";
import CountryCard from "../CountryCard/CountryCard";

export default function CountryCardWrapper(props) {
  const params = props.checkList
    .filter((el) => (el.status ? el.param : ""))
    .map((e) => e.param);
  return (
    <div className="country-card-wrapper">
      {Array.from(props.countriesList).map((country, index) => {
        let languages = "";
        let currencies = "";

        if (typeof country.name === "object") {
          languages = country.languages
            ? Object.values(country.languages).join(", ")
            : "";
          currencies = country.currencies
            ? Object.values(country.currencies)
                .map((val) => val.name)
                .join(", ")
            : "";
        } else {
          languages = country.languages
            ? [...country.languages].map((language) => language.name).join(", ")
            : "";
          currencies = country.currencies
            ? [...country.currencies]
                .map((currency) => currency.name)
                .join(", ")
            : "";
        }

        const borders = country.borders ? country.borders.join(", ") : "";

        return (
          <CountryCard
            key={index}
            name={
              typeof country.name == "object"
                ? country.name.common
                : country.name
            }
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flags.svg}
            languages={params.includes("languages") ? languages : ""}
            currencies={params.includes("currencies") ? currencies : ""}
            borders={params.includes("borders") ? borders : ""}
          />
        );
      })}
    </div>
  );
}
