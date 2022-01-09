import { types } from "../types/types";

//notes reducer
const initialState = {
  notes: [], //array of notes
  active: null, //state to show oor hide a note
};
export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesAddNew:
      break;
    default:
      return state;
      break;
  }
};
