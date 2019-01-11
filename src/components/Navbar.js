import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <nav className="navbar navbar-info">
    <div className="container">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">
          Young Developer
        </Link>
      </div>
    </div>
  </nav>
);
