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
    case types.notesAddNew:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case types.notesGetAll:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.notesUpdate:
      return {
        ...state,
        //search for the id note to be updated and add it to notes store
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    case types.notesDelete:
      return {
        ...state,
        active: null, //the active note has being deleted in firestore
        //return the state whitout the note deleted from firestore
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case types.notesLogoutCleanup:
      return {
        ...state,
        active: null,
        notes: [],
      };
    default:
      return state;
  }
};
