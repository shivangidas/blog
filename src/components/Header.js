import React, { Component } from "react";
import { Link } from "react-router-dom";

import Toggle from "react-toggle";
import "react-toggle/style.css";
class Layout extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      list: [],
      lightTheme: true
    };
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }
  handleThemeChange() {
    if (this.state.lightTheme) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      this.setState({
        lightTheme: false
      });
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      this.setState({
        lightTheme: true
      });
    }
  }
  render() {
    return (
      <header className="App-header">
        <h2 className="titleAccessHeader">
          <Link to="/blog">Overfitted </Link>
          <Toggle
            defaultChecked={this.state.lightTheme}
            icons={false}
            className="toggleButton"
            onChange={this.handleThemeChange}
          />
        </h2>
      </header>
    );
  }
}
export default Layout;
