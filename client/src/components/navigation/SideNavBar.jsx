import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./sideNavBar.style";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/products", label: "Products" },
];

const SideNavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Container isVisible={isVisible}>
      <button onClick={() => setIsVisible(!isVisible)}>x</button>
      <ul>
        {navLinks.map((navItem) => (
          <Link key={`nav-item-${navItem.label}`} to={navItem.path}>
            <li>{navItem.label}</li>
          </Link>
        ))}
      </ul>
    </Container>
  );
};

export default SideNavBar;
