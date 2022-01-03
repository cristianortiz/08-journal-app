import { types } from "../types/types";

//uiReducer to set error msg in redux global stae
const initialState = {
  loading: false,
  msgError: null,
};
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        //set error msg state property
        msgError: action.payload,
      };
    case types.uiRemoveError:
      return {
        ...state,
        //set error msg state property to default
        msgError: null,
      };

    default:
      return state;
  }
};
