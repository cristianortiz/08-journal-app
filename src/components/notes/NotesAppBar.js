import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";

const NotesAppBar = () => {
  const dispatch = useDispatch();
  //get active note from store, REC: is the one deployed in the NoteScreen comp
  const { active: note } = useSelector((state) => state.notes);
  const noteDate = moment(note.date);

  const handleSaveNote = () => {
    dispatch(startSaveNote(note));
  };
  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };
  const handleFileChange = (e) => {
    //console.log(e.target.files);
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };
  return (
    <div className="notes__app-bar">
      <span>{noteDate.format("dddd LL")}</span>
      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button onClick={handlePictureClick} className="btn">
          Picture
        </button>
        <button onClick={handleSaveNote} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
