import React from "react";
import "./Explore.css";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CakeIcon from "@mui/icons-material/Cake";
import RoomServiceIcon from "@mui/icons-material/RoomService";
function Explore() {
  return (
    <div className="explore">
      <h2>Explore</h2>
      <div className="explore__card">
        <div className="explore__cardFirst">
          <MenuBookOutlinedIcon
            sx={{ fontSize: 90, color: "#191A19" }}
            className="icon"
          />
          <h2>our menu</h2>
          <p>Explore our range of delicious Pizzas, delivered in 30 minutes!</p>
          <a href=" ">Discover Pizza</a>
        </div>
        <div className="explore__cardFirst">
          <StorefrontIcon
            sx={{ fontSize: 90, color: "#191A19" }}
            className="icon"
          />
          <h2>nearby store</h2>
          <p>Find a Domino's Pizza restaurant near you</p>
          <a href=" ">find domino's store</a>
        </div>
        <div className="explore__cardFirst">
          <CakeIcon sx={{ fontSize: 90, color: "#191A19" }} className="icon" />
          <h2>birthday party</h2>
          <p>Celebrate the joy of borthday with Fresh & Hot pizzas</p>
          <a href=" ">book now</a>
        </div>
        <div className="explore__cardFirst">
          <RoomServiceIcon
            sx={{ fontSize: 90, color: "#191A19" }}
            className="icon"
          />
          <h2>catering</h2>
          <p>Live Domino's Kitchen for weddings/ corporate events</p>
          <a href=" ">book now</a>
        </div>
      </div>
    </div>
  );
}

export default Explore;
