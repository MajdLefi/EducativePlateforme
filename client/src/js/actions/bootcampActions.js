import axios from "axios";
import {
  GET_BOOTCAMPS,
  ADD_BOOTCAMPS,
  EDIT_BOOTCAMPS,
  REMOVE_BOOTCAMPS,
} from "../constants/actionsTypes";

//GET ALL BOOTCAMPS
//PATH : /bootcamps/list
//response : ARRAY OF BOOTCAMPS

// export const getBootcamps =() => (dispatch) => {
//     axios.get('/bootcamps/list').then(res=>{
//         dispatch({
//             type: GET_BOOTCAMPS,
//             payload: res.data
//         })
//     })
//     .catch(err=>console.error(err))
// }

export const getBootcamps = () => (dispatch) => {
  axios
    .get("/bootcamps")
    .then((res) => {
      dispatch({
        type: GET_BOOTCAMPS,
        payload: res.data,
      });
    })
    .catch((err) => console.error(err));
};

export const addBootcamps = (newBootcamp) => (dispatch) => {
  axios
    .post("/bootcamps/add_bootcamp", newBootcamp)
    .then((res) => {
      dispatch({
        type: ADD_BOOTCAMPS,
        payload: res.data,
      });
    })
    .catch((err) => console.error(err));
};

export const editBootcamp = (_id, formData) => async (dispatch) => {
  await axios
    .put(`/bootcamps/${_id}`, formData)
    .then((res) => dispatch(getBootcamps()))
    .catch((err) => {
      err.response.data = { msg: "Error to put the bootcamp " };
    });
};

export const removeBootcamps = (_id) => async (dispatch) => {
  await axios
    .delete(`/bootcamps/${_id}`)
    .then((res) => dispatch(getBootcamps()))
    .catch((err) => {
      err.response.data = { msg: "Error to delete the bootcamp " };
    });
};

export const followBootcamp = (idBootcamp, idUser) => async (dispatch) => {
  axios
    .put(`/bootcamps/like/${idBootcamp}/${idUser}`)
    .then((res) => dispatch(getBootcamps()))
    .catch((err) => console.log(err));
};

export const unfollowBootcamp = (idBootcamp, idUser) => async (dispatch) => {
  axios
    .put(`/bootcamps/unlike/${idBootcamp}/${idUser}`)
    .then((res) => dispatch(getBootcamps()))
    .catch((err) => console.log(err));
};
