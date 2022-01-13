import { db, getDocs, collection } from "../firebase/firebaseConfig";

export const loadNotes = async (uid) => {
  const notesSnap = await getDocs(collection(db, `${uid}/journal/notes`));
  //array to store the notes data
  const notes = [];
  //console.log(notesSnap);
  //extract every note id from retrieved data
  notesSnap.forEach((snapHijo) => {
    //notes will containg the data and the id of every retrieved note
    notes.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });

  return notes;
};
