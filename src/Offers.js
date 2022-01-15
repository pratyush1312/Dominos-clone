import React from "react";
import "./Offers.css";

function Offers() {
  return (
    <div className="offers">
      <h2>Coupons & Offers</h2>
      <marquee>
        <div className="offers__images">
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/amazon_home_20210412.jpg"
            alt=""
          />
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/Home_Paytm_20210519.jpg"
            alt=""
          />
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/Home_airtel_30082020.jpg"
            alt=""
          />
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/Home_Freecharge_20210405.jpg"
            alt=""
          />
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/Dominos_Mobi_Home_20210503.jpg"
            alt=""
          />
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/Home_payzapp_20201029.jpg"
            alt=""
          />
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/Home_au_20201029.jpg"
            alt=""
          />
        </div>
      </marquee>
    </div>
  );
}

export default Offers;
