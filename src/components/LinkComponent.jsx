import React from "react";
import { NavLink } from "react-router-dom";

function LinkComponent({ text, route }) {
  return (
    <NavLink className="navigation__link" to={`/${route}`}>
      {text}
    </NavLink>
  );
}

export default LinkComponent;
