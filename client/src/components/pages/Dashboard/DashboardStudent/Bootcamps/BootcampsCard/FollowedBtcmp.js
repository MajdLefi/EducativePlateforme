import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { getUsers } from "../../../../../../js/actions/userActions";
import {
  getBootcamps,
  followBootcamp,
  unfollowBootcamp,
} from "../../../../../../js/actions/bootcampActions";
function FollowedBtcmp({ bootcamp }) {
  useEffect(() => {
    getBootcamps();
  }, []);

  const user = useSelector((state) => state.authReducer.user);

  const myBootcamps = useSelector((state) => state.bootcampsReducer.bootcamps);

  return (
    <div className="cardsBtcmp">
      <Card className="BtcmpCardStudent">
        <CardImg
          className="BtcmpImg"
          src={bootcamp.image}
          alt="Card image cap"
        />
        <CardBody className="BtcmpCardBody">
          <CardTitle tag="h5" className="titleBtcmp">
            {bootcamp.title}
          </CardTitle>
          <CardSubtitle tag="h6" className="descBtcmp">
            {bootcamp.description}
          </CardSubtitle>
          {/* <FollowBtn/> */}
        </CardBody>
      </Card>
    </div>
  );
}

export default FollowedBtcmp;
