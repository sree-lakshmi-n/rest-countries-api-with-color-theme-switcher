import React, { useState } from "react";
import "./App.css";

function App() {
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

export default App;
