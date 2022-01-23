import React from "react";
import { Nav } from "react-bootstrap";
import LinkComponent from "./LinkComponent";

function Navigation({ links }) {
  return (
    <Nav className="navigation">
      {links
        ? links.map((link, i) => {
            return (
              <LinkComponent key={i} text={link.text} route={link.route} />
            );
          })
        : ""}
    </Nav>
  );
}

export default Navigation;
