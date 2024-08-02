import React from "react";
import logo from "./logo.svg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="grid">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Facts</h2>

        <h3>React Course - Project One</h3>
      </div>
    </div>
  );
}
