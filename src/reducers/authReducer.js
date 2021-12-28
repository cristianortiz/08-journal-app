import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      //add to store state the uid and username from firebase in success login
      return {
        uid: action.payload.uid,
        username: action.payload.showUsername,
      };
    //set the store state to default as empry object in logout
    case types.logout:
      return {};

    default:
      return state;
  }
};
