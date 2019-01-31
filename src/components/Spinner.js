import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => (
  <span
    className="mx-auto"
    style={{
      fontSize: 48,
      display: "block",
      width: 50,
      marginTop: 60
    }}
  >
    <FontAwesomeIcon icon="spinner" spin />
  </span>
);
