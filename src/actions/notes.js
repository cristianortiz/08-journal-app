import {
  db,
  doc,
  collection,
  setDoc,
  updateDoc,
} from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
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
//async action to load notes from firestore
export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    //helpers func to retrieves logged user notes from firestore (returns a promise)
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

//action to add the notes retrieved from firestore in redux store
export const setNotes = (notes) => ({
  type: types.notesGetAll,
  payload: notes,
});
//async action to add the updated note in NoteScreen comp form to firestore
export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    //getState to retrieve authenticated user id to
    const { uid } = getState().auth;
    //if note does not have an image remove url
    if (!note.url) {
      delete note.url;
    }
    //destructure the note to remove the id on update
    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    //update the note in firetore
    const noteRef = doc(db, `${uid}/journal/notes/${note.id}`);
    //update the note without the id
    await updateDoc(noteRef, noteToFirestore);
  };
};
