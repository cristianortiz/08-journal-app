import { db, doc, collection, setDoc } from "../firebase/firebaseConfig";
import { types } from "../types/types";

//aync action must have a return
export const startNewNote = () => {
  //getState is a func to get date from state, similar to useSelector
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    //save new note in firebase
    const ref = doc(collection(db, `${uid}/journal/notes`));
    await setDoc(ref, newNote);
    console.log(ref);
    dispatch(activeNote(ref.id, newNote));
  };
};
//to activate an empty note to be edited in noteScreen
export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});
//action to set the notes retrieved from firestore in redux store
export const setNotes = (notes) => ({
  type: types.notesGetAll,
  payload: notes,
});
