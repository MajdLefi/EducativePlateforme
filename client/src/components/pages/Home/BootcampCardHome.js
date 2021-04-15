import React, { useState, useEffect } from "react";
import "./BootcampCardHome.css";
function BootcampCardHome({ bootcamp }) {
  return (
    <div className="courseCrdHome">
      <div className="imgCard">
        <img
          className="imgPerson"
          height="100px"
          width="100px"
          src={bootcamp.image}
        />
      </div>
      <h4 className="btcmpCtgry">{bootcamp.title}</h4>
      <p className="btcmpTitle">{bootcamp.description}</p>
      <div className="registerBtcmpBtn"></div>
    </div>
  );
}

export default BootcampCardHome;
