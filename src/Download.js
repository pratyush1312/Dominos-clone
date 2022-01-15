import React from "react";
import "./Download.css";

function Download() {
  return (
    <div className="download">
      <div className="download__left">
        <img src="https://www.dominos.co.in/assets/new_app_img.png" alt="" />
      </div>
      <div className="download__right">
        <h2>Unlock Exclusive Offers</h2>
        <h3>
          For lightning fast ordering experience download the Domino’s app
        </h3>
        <div className="download__rightIcon">
          <img src="https://www.dominos.co.in/assets/play_store.png" alt="" />
          <img src="https://www.dominos.co.in/assets/app_store.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Download;
