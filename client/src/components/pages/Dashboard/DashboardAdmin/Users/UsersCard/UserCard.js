import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { getUsers, deleteUser } from "../../../../../../js/actions/userActions";
import EditUser from "../../../../../Modals/Users/EditUser/EditUser";
import "./UserCard.css";
function UserCard({ user, _id }) {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUsers = (id, formData) => dispatch(deleteUser(id, formData));

  return (
    <div className="cardUser">
      <Card className="UserCardStudent">
        <CardImg
          className="UserImg"
          src={user.imgProfile}
          alt="Card image cap"
        />
        <CardBody className="UserCardBody">
          <CardTitle tag="h5" className="titleUser">
            First name : {user.firstName}
          </CardTitle>
          <CardTitle tag="h5" className="descUser">
            Last name : {user.lastName}
          </CardTitle>
          <CardTitle tag="h5">Email : {user.email}</CardTitle>
          <div className="btnsUserContainer">
            <Button
              className="deleteUserBtn"
              onClick={() => deleteUsers(user._id)}
            >
              {" "}
              <i class="far fa-trash-alt"></i>
            </Button>
            <EditUser
              oldUser={{
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
              }}
              _id={user._id}
            />
            {/* <Button>
              <i class="fas fa-edit"></i>
            </Button> */}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default UserCard;
