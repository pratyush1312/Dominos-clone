import React from "react";
import "./Online.css";
function Online() {
  return (
    <div className="online">
      <div className="online__left">
        <h3>Domino's online ordering</h3>
        <h4>Yummy pizza delivered fast & fresh</h4>
        <button>Order online now</button>
        <img
          src="https://www.dominos.co.in/assets/banner_brand_20210922.jpg"
          alt="offer"
        />
      </div>
      <div className="online__right">
        <img src="https://www.dominos.co.in/assets/header_bg.png" alt="" />
      </div>
    </div>
  );
}

export default Online;
