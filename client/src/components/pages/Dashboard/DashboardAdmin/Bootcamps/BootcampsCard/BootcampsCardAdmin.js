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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  Label,
  Form,
} from "reactstrap";
import {
  getBootcamps,
  editBootcamp,
  removeBootcamps,
} from "../../../../../../js/actions/bootcampActions";
import EditBootcamp from "../../../../../Modals/Bootcamps/EditBootcamp/EditBootcamp";

import "./BootcampsCardAdmin.css";

const BootcampsCardAdmin = ({ bootcamp, _id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getBootcamps();
  }, []);
  const removeBootcamp = (id, formData) =>
    dispatch(removeBootcamps(id, formData));

  // const user = useSelector((state) => state.authReducer.user);
  // const myBootcamps = useSelector((state) => state.bootcampsReducer.bootcamps);

  return (
    <div className="cardBtcmp">
      <Card className="btcmpCardStudent">
        <CardImg
          className="btcmpImg"
          src={bootcamp.image}
          alt="Card image cap"
        />
        <CardBody className="btcmpCardBody">
          <CardTitle tag="h5" className="titleBtcmp">
            {bootcamp.title}
          </CardTitle>
          <CardSubtitle tag="h6" className="descBtcmp">
            {bootcamp.description}
          </CardSubtitle>
          <CardText>eee</CardText>
          <div>
            {/* <EditBootcamp/> */}
            <div className="btnsUserContainer">
              <Button
                onClick={() => removeBootcamp(bootcamp._id)}
                className="deleteUserBtn"
              >
                {" "}
                <i class="far fa-trash-alt"></i>
              </Button>
              <Button>
                <i class="fas fa-edit"></i>
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default BootcampsCardAdmin;
