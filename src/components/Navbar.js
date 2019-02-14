import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../young_developer_logo.png";

export default () => {
  const icons = {
    "facebook-f": "https://www.facebook.com/youngdevelops",
    vk: "https://vk.com/youngdevelops",
    youtube: "https://www.youtube.com/channel/UCyPpl_gRz1j_xWbVP5SanlQ",
    twitter: "https://twitter.com/youngdevelops",
    instagram: "https://www.instagram.com/youngdevelops/",
    github: "https://github.com/youngdeveloper-co",
    "linkedin-in": "https://www.linkedin.com/in/bexuma/"
  };

  return (
    <nav className="navbar navbar-default navbar-expand-lg">
      <div className="container" style={{ maxWidth: "1088px" }}>
        <Link to="/" className="navbar-brand">
          <img src={logo} width="191" height="52" alt="fff" />
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item" style={{ marginLeft: 24 }}>
              <Link to="/">Blog</Link>
            </li>
            <li className="nav-item" style={{ marginLeft: 24 }}>
              <Link to="/">Resume</Link>
            </li>
            <li className="nav-item" style={{ marginLeft: 24 }}>
              <Link to="/">Contact</Link>
            </li> */}
            {Object.entries(icons).map((icon, index) => {
              return (
                <li key={index} className="nav-item" style={{ marginLeft: 24 }}>
                  <a
                    href={icon[1]}
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ fontSize: 24, color: "#00b0cc" }}
                  >
                    <FontAwesomeIcon icon={["fab", `${icon[0]}`]} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
