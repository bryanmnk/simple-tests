import React, { useEffect, useState } from "react";
import { Container } from "react-grid-system";
import { getData } from "../Api/getData";
// logo
import logo from "../assets/images/bellotero@3x.png";
import LinkComponent from "./LinkComponent";

function Navigation() {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    getData(`/app.json`).then((res) => {
      setLinks(res.data.menu.items);
    });
  }, []);
  console.log(links);
  return (
    <nav>
      <Container>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="navigation">
          {links.map((link, i) => {
            return (
              <LinkComponent key={i} text={link.text} route={link.route} />
            );
          })}
        </div>
      </Container>
    </nav>
  );
}

export default Navigation;
