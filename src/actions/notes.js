import { db, doc, collection, setDoc } from "../firebase/firebaseConfig";

//aync action must have a return
export const startNewNote = () => {
  //getState is a func to get date from state, similar to useSelector
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    //save new note in firebase
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const ref = doc(collection(db, `${uid}/journal/notes`));
    await setDoc(ref, newNote);
    console.log(ref);
  };
};
