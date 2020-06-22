import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Toggle from "react-toggle";
import "react-toggle/style.css";
function Layout() {
  const [lightTheme, setLightTheme] = useState(true);
  useEffect(() => {
    if (!lightTheme) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [lightTheme]);
  return (
    <header className="App-header">
      <h2 className="titleAccessHeader">
        <Link to="/blog">Overfitted </Link>
        <Toggle
          defaultChecked={lightTheme}
          icons={false}
          className="toggleButton"
          onChange={() => setLightTheme(!lightTheme)}
        />
      </h2>
    </header>
  );
}

export default Layout;
