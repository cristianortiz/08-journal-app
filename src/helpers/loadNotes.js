import { db, getDocs, collection } from "../firebase/firebaseConfig";

export const loadNotes = async (uid) => {
  const notesSnap = await getDocs(collection(db, `${uid}/journal/notes`));
  const notes = [];
  console.log(notesSnap);

  notesSnap.forEach((snapHijo) => {
    notes.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });

  return notes;
};
