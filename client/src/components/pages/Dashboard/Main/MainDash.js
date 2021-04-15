import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";
import "./MainDash.css";
import hello from "../../../../assets/hello.svg";
import EditProfileStudent from "../../../Modals/Profile/Student/EditProfileStudent";
import FollowedBtcmp from "../DashboardStudent/Bootcamps/BootcampsCard/FollowedBtcmp";

const MainDash = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const follower = useSelector((state) => state.authReducer.user.myBootcamps);

  const bootcamps = useSelector((state) => state.bootcampsReducer.bootcamps);
  return (
    <div>
      {/* <div className="containerMainDash">
        <div className="main__container">
          <div className="main__title">
            <img src={hello} alt="hello" />
            <div className="main__greeting">
              <p>Welcome to your admin dashboard</p>
              <p>{user.firstName}</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="dashboardCards">
        <img className="studentsCard" src={user.imgProfile} />
        <div className="editAndName">
          <h5 className="fullNameTxt">
            {user.firstName}.{user.lastName}
          </h5>
          <EditProfileStudent
            oldUser={{
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              password: user.password,
              imgProfile: user.imgProfile,
            }}
            _id={user._id}
          />
          {/* <div className="btcmpsListStudent">
            {userz
              .map((user) => (
                <BootcampsCardStudent key={bootcamp._id} bootcamp={bootcamp} />
              ))}
          </div> */}
        </div>
      </div>
      <h4 className="titleBtcmpContainer">My bootcamps</h4>
      <div className="followedBtcmpContainer">
        {follower.map((bootcamp) => (
          <FollowedBtcmp key={bootcamp._id} bootcamp={bootcamp} />
        ))}
      </div>
    </div>
  );
};

export default MainDash;
