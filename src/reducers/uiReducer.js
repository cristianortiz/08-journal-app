import { types } from "../types/types";

//uiReducer
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
    case types.uiStartLoading:
    case types.uiFinishLoading:
      return {
        ...state,
        //set error msg state property to default
        loading: action.payload,
      };

    default:
      return state;
  }
};
