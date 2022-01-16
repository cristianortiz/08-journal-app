import Swal from "sweetalert2";
import {
  db,
  doc,
  collection,
  setDoc,
  updateDoc,
} from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

//-----------------------------------------------------------
//TODO: to add try-catch for all firebase CRUD async querys
//-----------------------------------------------------------

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
    dispatch(refreshNote(note));
    Swal.fire("Note Updated", note.title, "success");
  };
};

//action to show in sidebar a specific updated note
export const refreshNote = (note) => ({
  type: types.notesUpdate,
  payload: note,
});

//action to show in sidebar a specific updated note
export const startUploading = (file) => {
  //getState is a func to get date from state, similar to useSelector
  return async (dispatch, getState) => {
    //get the active note from note store
    const { active: activeNote } = getState().notes;
    //show an alert while the file is being uploading
    Swal.fire({
      title: "Uploading...",
      text: "Please wait...",
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });
    const fileURL = await fileUpload(file);
    activeNote.url = fileURL;
    //updating note with the image url
    dispatch(startSaveNote(activeNote));
    Swal.close();
  };
};
