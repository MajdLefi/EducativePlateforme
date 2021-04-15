import axios from "axios";
import {
  GET_USERS,
  GET_AUTH_USER,
  EDIT_USER,
  ADD_USER,
} from "../constants/actionsTypes";

import {getBootcamps} from "../actions/bootcampActions"

export const getUsers = () => async (dispatch) => {
  await axios
    .get("/users")
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    })
    .catch((err) => console.error(err));
};

export const getCurrentUser = (id) => async (dispatch) => {
  await axios
    .get(`/user/${id}`)
    .then((res) => dispatch({ type: GET_AUTH_USER, payload: res.data }))
    .catch((err) => console.log(err));
};

export const addUser = (newUser) => async (dispatch) => {
  await axios
    .post("/user/add_user", newUser)
    .then((res) => dispatch({ type: ADD_USER, payload: res.data }))
    .catch((err) => console.log(err));
};

export const editUser = (id, formData) => async (dispatch) => {
  await axios
    .put(`/users/${id}`, formData)
    .then((res) => dispatch(getUsers()))
    .catch((err) => {
      err.response.data = { msg: "Error to edit the user " };
    });
};

export const deleteUser = (_id) => async (dispatch) => {
  await axios
    .delete(`/users/${_id}`)
    .then((res) => dispatch(getUsers()))
    .catch((err) => {
      err.response.data = { msg: "Error to delete the user " };
    });
};

export const likeBootcamp = (idUser,idBootcamp) => async (dispatch) => {
  axios
    .put(`/user/like/${idUser}/${idBootcamp}`)
    .then((res) => dispatch(getBootcamps()))
    .catch((err) => console.log(err));
};

export const unlikeBootcamp = (idUser,idBootcamp) => async (dispatch) => {
  axios
    .put(`/user/unlike/${idUser}/${idBootcamp}`)
    .then((res) => dispatch(getBootcamps()))
    .catch((err) => console.log(err));
};
