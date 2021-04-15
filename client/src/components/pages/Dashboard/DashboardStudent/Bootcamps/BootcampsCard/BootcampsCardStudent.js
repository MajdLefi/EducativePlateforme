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
import {
  getBootcamps,
  followBootcamp,
  unfollowBootcamp,
} from "../../../../../../js/actions/bootcampActions";

import {
  getUsers,
  likeBootcamp,
  unlikeBootcamp,
} from "../../../../../../js/actions/userActions";
import "./BootcampsCardStudent.css";
import FollowBtn from "./FollowBtn";

const BootcampsCardStudent = ({ bootcamp }) => {
  useEffect(() => {
    getBootcamps();
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  const user = useSelector((state) => state.authReducer.user);
  const myBootcamps = useSelector((state) => state.bootcampsReducer.bootcamps);
  //let book= myBootcamps.find(el=>el._id==PFEID)
  const dispatch = useDispatch();
  const [followed, setFollowed] = useState(false);

  const handleFollow = () => {
    setFollowed(true);
    dispatch(likeBootcamp(user._id, bootcamp._id));
    dispatch(followBootcamp(bootcamp._id, user._id));
  };
  const handleUnfollow = () => {
    dispatch(unlikeBootcamp(user._id, bootcamp._id));
    dispatch(unfollowBootcamp(bootcamp._id, user._id));
  };
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
          <div className="followBtnBtcmp">
            {bootcamp.followers.find((el) => el._id === user._id) ? (
              <button
                className="btn btn-outline-danger"
                onClick={handleUnfollow}
              >
                Unfollow
              </button>
            ) : (
              <button className="btn btn-outline-info" onClick={handleFollow}>
                Follow
              </button>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
export default BootcampsCardStudent;
