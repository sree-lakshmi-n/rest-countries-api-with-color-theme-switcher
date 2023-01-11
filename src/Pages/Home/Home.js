import React, { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div
      className={`container ${
        isDarkMode ? "container__dark" : "container__light"
      }`}
    >
      Hello
    </div>
  );
}
