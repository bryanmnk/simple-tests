import React, { useEffect, useState } from "react";
import { Container } from "react-grid-system";
import { getData } from "../Api/getData";
// logo
import logo from "../assets/images/bellotero.png";
import LinkComponent from "./LinkComponent";

function Navigation() {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    getData(`/app.json`).then((res) => {
      setLinks(res.data.menu.items);
    });
  }, []);

  return (
    <Container>
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav__menu">
          {links.map((link, i) => {
            return (
              <LinkComponent key={i} text={link.text} route={link.route} />
            );
          })}
        </ul>
      </nav>
    </Container>
  );
}

export default Navigation;
