import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote } from "../../actions/notes";

const NotesAppBar = () => {
  const dispatch = useDispatch();
  //get active note from store, REC: is the one deployed in the NoteScreen comp
  const { active: note } = useSelector((state) => state.notes);

  const handleSaveNote = () => {
    dispatch(startSaveNote(note));
  };
  return (
    <div className="notes__app-bar">
      <span>28 de Agosto 2021</span>

      <div>
        <button className="btn">Picture</button>
        <button onClick={handleSaveNote} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
