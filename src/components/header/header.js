import React from "react";

import "./header.css";
import Logo from "../../assets/icon-travel.png";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="logo-travel" /> my travel journal.
    </header>
  );
}

export default Header;
