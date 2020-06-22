import React, { useState } from "react";
import { Link } from "react-router-dom";

import Toggle from "react-toggle";
import "react-toggle/style.css";
function Layout() {
  const [lightTheme, setLightTheme] = useState(true);

  return (
    <header className="App-header">
      <h2 className="titleAccessHeader">
        <Link to="/blog">Overfitted </Link>
        <Toggle
          defaultChecked={lightTheme}
          icons={false}
          className="toggleButton"
          onChange={handleThemeChange}
        />
      </h2>
    </header>
  );
  function handleThemeChange() {
    if (lightTheme) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      setLightTheme(false);
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      setLightTheme(true);
    }
  }
}

export default Layout;
