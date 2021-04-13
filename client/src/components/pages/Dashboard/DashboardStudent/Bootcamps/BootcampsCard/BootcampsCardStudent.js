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
import { followBootcamp } from "../../../../../../js/actions/userActions";
import { getBootcamps } from "../../../../../../js/actions/bootcampActions";
import "./BootcampsCardStudent.css";

const BootcampsCardStudent = ({ bootcamp }) => {
  useEffect(() => {
    getBootcamps();
  }, []);

  const user = useSelector((state) => state.authReducer.user);
  const myBootcamps = useSelector((state) => state.bootcampsReducer.bootcamps);
  //let book= myBootcamps.find(el=>el._id==PFEID)
  const dispatch = useDispatch();
  const [followed, setFollowed] = useState(false);

  const handleFollow = () => {
    setFollowed(true);
    dispatch(followBootcamp({}))
  };
  const handleUnfollow = () => {
    setFollowed(false);
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
          <CardText>{bootcamp.image}</CardText>
          {followed ? (
            <button className="btn btn-outline-danger" onClick={handleUnfollow}>
              Unfollow
            </button>
          ) : (
            <button className="btn btn-outline-info" onClick={handleFollow}>
              Follow
            </button>
          )}
        </CardBody>
      </Card>
    </div>
  );
};
export default BootcampsCardStudent;
