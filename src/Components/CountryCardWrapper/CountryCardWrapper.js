import React, { useEffect, useState } from "react";
import "./CountryCardWrapper.css";
import CountryCard from "../CountryCard/CountryCard";
export default function CountryCardWrapper(props) {
  const [countriesList, setCountriesList] = useState("");
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setCountriesList(data);
        console.log(data);
      });
  }, [props.theme]);

  return (
    <div className="country-card-wrapper">
      {Array.from(countriesList).map((country, index) => {
        return (
          <CountryCard
            key={index}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flags.svg}
          />
        );
      })}
    </div>
  );
}
