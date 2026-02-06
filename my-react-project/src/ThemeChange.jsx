import React, { useState } from "react";

function ThemeChange() {
  const [theme, setTheme] = useState("dark");

  const setToLightTheme = () => {
    setTheme("light");
  };

  const setToDarkTheme = () => {
    setTheme("dark");
  };

  return (
    <div className={`white-space ${theme == "dark" ? "dark-theme" : ""}`}>
      <div>
        <button onClick={setToLightTheme}>Light</button>
        <button onClick={setToDarkTheme}>Dark</button>
      </div>
      <h1>Theme change</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi, illum, dignissimos voluptatem aliquam similique eaque modi, voluptas magni commodi voluptatum mollitia doloribus assumenda eum delectus quos? Quasi, neque adipisci.\</p>
    </div>
  );
}

export default ThemeChange;
