import { types } from "../types/types";

//return an object
export const login = (uid, showUsername) => {
  return {
    type: types.login,
    payload: {
      uid,
      showUsername,
    },
  };
};
