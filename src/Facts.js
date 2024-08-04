import React from "react";
import "./Facts.css";
import logo from "./logo-main.png";

export default function Facts() {
  return (
    <div className="Facts">
      <div className="grid">
        <div>
          <h1>Fun Facts About React</h1>
          <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousand of enterprise apps, including mobile apps</li>
          </ul>
        </div>

        <div>
          <img className="logo-position" src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
