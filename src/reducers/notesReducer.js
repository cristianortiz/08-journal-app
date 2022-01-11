import { types } from "../types/types";

//notes reducer
const initialState = {
  notes: [], //array of notes
  active: null, //state to show oor hide a note
};
export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: { ...action.payload },
      };
    case types.notesGetAll:
      return {
        ...state,
        notes: [...action.payload],
      };

    default:
      return state;
  }
};
