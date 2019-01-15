import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <nav className="navbar navbar-default navbar-expand-lg">
    <div className="container">
      <Link to="/" className="navbar-brand" style={{minHeight: 70, paddingTop: 15, paddingBottom: 15}}>
        <img
          src="img/young_developer_logo.png"
          width="147"
          height="40"
          alt="fff"
        />
      </Link>
    </div>
  </nav>
);
