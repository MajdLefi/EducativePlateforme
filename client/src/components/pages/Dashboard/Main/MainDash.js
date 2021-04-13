import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MainDash.css";
import hello from "../../../../assets/hello.svg";

const MainDash = () => {

  return (
    <div>
      <div className="containerMainDash">
        <div className="main__container">
          {/* <!-- MAIN TITLE STARTS HERE --> */}

          <div className="main__title">
            <img src={hello} alt="hello" />
            <div className="main__greeting">
              <p>Welcome to your admin dashboard</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboardCards">
        <img
          className="studentsCard"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
        />
        <div className="bootcampsCard">
          {/* <h1>{user.firstName}</h1> */}
        </div>
      </div>
    </div>
  );
};

export default MainDash;
