import axios from "axios";
import {
  GET_USERS,
  GET_AUTH_USER,
  EDIT_USER,
  ADD_USER,
} from "../constants/actionsTypes";

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
  try {
    await axios.put(`/users/${id}`, formData);
    dispatch(getUsers());
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = (_id) => async (dispatch) => {
  await axios
    .delete(`/users/${_id}`)
    .then((res) => dispatch(getUsers()))
    .catch((err) => {
      err.response.data = { msg: "Error to delete the user " };
    });
};

// export const followBootcamp=({ID,userID})=>dispatch=>{
//   axios.put(`/myBootcamps/like`,{ID,userID})
//   .then(res=>dispatch(getCurrentUser()))
//  .catch(err=>console.log(err))
//  }

export const followBootcamp = ({ users }) => async (dispatch) => {
  console.log(users);
};
