import React from "react";
import "./Btn.css";

function Btn() {
  return (
    <div className="btn">
      <div className="first__row">
        <button>Restaurants in Chennai</button>
        <button>Restaurants in Hyderabad</button>
        <button>Restaurants in Bangalore</button>
        <button>Restaurants in Kolkata</button>
        <button>Restaurants in Mumbai</button>
        <button>Restaurants in New Delhi</button>
        <br />
        <button>Restaurants in Ahmedabad</button>
        <button>Restaurants in Pune</button>
        <button>Restaurants in Goa</button>
      </div>
      <div className="second__row">
        <button>Restaurants in Chennai</button>
        <button>Restaurants in Hyderabad</button>
        <button>Restaurants in Bangalore</button>
        <button>Restaurants in Kolkata</button>
        <button>Restaurants in Mumbai</button>
        <button>Restaurants in New Delhi</button>
        <br />
        <button>Restaurants in Ahmedabad</button>
        <button>Restaurants in Pune</button>
        <button>Restaurants in Goa</button>
      </div>
    </div>
  );
}

export default Btn;
