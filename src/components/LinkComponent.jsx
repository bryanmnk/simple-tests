import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function LinkComponent({ text, route }) {
  return (
    <NavLink to={`/${route}`} className="nav__menu__link">
      {text}
    </NavLink>
  );
}

export default LinkComponent;
