import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <nav className="navbar navbar-expand-lg bg-info">
    <div className="container">
      <div className="navbar-translate">
        <Link to="/" className="navbar-brand" style={{fontWeight: "bold"}}>
          Young Developer
        </Link>

      </div>
    </div>
  </nav>
);
