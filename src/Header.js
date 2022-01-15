import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/01/Dominos-logo.jpg"
          alt="logo"
        />
      </div>
      <div className="header__center">
        <h3>our menu</h3>
        <h3>store finder</h3>
        <h3>gift card</h3>
        <h3>corporate enquiry</h3>
        <h3>contact</h3>
      </div>
      <div className="header__right">
        <a href=" " className="header__rightButton">
          Download App
        </a>
      </div>
    </div>
  );
}

export default Header;
