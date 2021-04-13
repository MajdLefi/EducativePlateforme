import {
  GET_USERS,
  GET_PROFILE,
  ADD_USER,
  DELETE_USER,
} from "../constants/actionsTypes";

const initialState = {
  users: [], //all users
  isLoading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      }; //payload: array of bootcamps
    // case ADD_USERS:
    //   return {
    //     ...state,
    //     users: [...state.users, action.payload],
    //   };
    case ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case DELETE_USER:
      return {
        ...state,
        users: [state.users.filter((user) => user._id !== action.payload)],
      };
    default:
      return state;
  }
};

export default usersReducer;
