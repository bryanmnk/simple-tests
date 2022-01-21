import React from "react";
import { NavLink } from "react-router-dom";

function LinkComponent({ text, route }) {
  return (
    <li className="nav__menu__link">
      <NavLink to={`/${route}`}>{text}</NavLink>
    </li>
  );
}

export default LinkComponent;
