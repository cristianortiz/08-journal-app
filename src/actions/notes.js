import Swal from "sweetalert2";
import {
  db,
  doc,
  collection,
  setDoc,
  updateDoc,
  deleteDoc,
} from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

//-----------------------------------------------------------
//TODO: to add try-catch for all firebase CRUD async querys
//-----------------------------------------------------------

//action to create an empty note in firestore, set as active ,show it in sidebar and in NoteScreen to be
// completed
export const startNewNote = () => {
  //getState is a func to get date from state, similar to useSelector
  //asyncs actions must contains a return with async-await block
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
      url: "",
    };
    //save new note in firebase
    const ref = doc(collection(db, `${uid}/journal/notes`));
    await setDoc(ref, newNote);
    //console.log(ref);
    //set new empty note as the activate a note to show it in NoteScreen
    dispatch(activeNote(ref.id, newNote));
    //add the new empty note to store and show it in sidebar
    dispatch(addNewNote(ref.id, newNote));
  };
};
//action to activate a note to be edited in NoteScreen
export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});
//action to add a new note in store and show it in sidebar
export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
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
//async action to save a completed note to firestore, also to save updates to an existing note
//and show it in sidebar
export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    //getState to retrieve authenticated user id to
    const { uid } = getState().auth;
    //if note does not have an image remove url field
    if (!note.url) {
      delete note.url;
    }
    //destructure the note to remove the id on save or update it to firestore
    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    //save or update  the note  in firetore
    const noteRef = doc(db, `${uid}/journal/notes/${note.id}`);

    await updateDoc(noteRef, noteToFirestore);
    //show the saved or updated note in sidebar
    dispatch(refreshNote(note));
    //show alert msg to the user
    Swal.fire("Saved", note.title, "success");
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
//async action to delete a note in firesotoreby their id
export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    //getState to retrieve authenticated user id to
    const { uid } = getState().auth;
    //delete the note in firetore
    const noteRef = doc(db, `${uid}/journal/notes/${id}`);
    await deleteDoc(noteRef);

    dispatch(deleteNote(id));
  };
};
//action to delete a note from the store
export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id,
});

//action to delete the notes from store when user logout
export const noteLogout = () => ({
  type: types.notesLogoutCleanup,
});
