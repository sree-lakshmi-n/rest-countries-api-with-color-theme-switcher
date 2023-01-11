import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./Home.css";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div
      className={`container ${
        isDarkMode ? "container__dark" : "container__light"
      }`}
    >
      <Header />
    </div>
  );
}
