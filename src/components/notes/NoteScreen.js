import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotesAppBar from "./NotesAppBar";
import useForm from "../hooks/useForm";
import { activeNote, startDeleting } from "../../actions/notes";

const NoteScreen = () => {
  const dispatch = useDispatch();
  //get active note from store
  const { active: note } = useSelector((state) => state.notes);
  //custom hook to handle form and show the note fields in the notes form input values
  const [formValues, handleInputChange, reset] = useForm(note);
  //extract updated values of the form input values
  const { body, title, id } = formValues;
  //trigger the effect only if the note id changes when user clicks, useRef to keep reference tonote.id
  const refNoteID = useRef(note.id);
  useEffect(() => {
    //check if the current note id stored in useRef has changed
    if (note.id !== refNoteID.current) {
      //reset form with new values if thenote id has changed
      reset(note);
      //set the newnote.id in useRef
      refNoteID.current = note.id;
    }
  }, [note, reset]);

  //this effect is to update thenote in redux store
  useEffect(() => {
    //console.log(formValues);
    //call dispatch with formValues(also can call it withnote values)
    //to have less dependencies in useEffect
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    // console.log(id);
    dispatch(startDeleting(id));
  };
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title here"
          className="notes__title-input"
          value={title}
          onChange={handleInputChange}
          //REC: the name property enable edit the form inputs check the useForm hook
          name="title"
        />
        <textarea
          placeholder="what do you want to share today?"
          className="notes__textarea "
          value={body}
          onChange={handleInputChange}
          //REC: the name property enable edit the form inputs check the useForm hook
          name="body"
        ></textarea>
        {note.url && (
          <div className="notes__image">
            <img alt="notePic" src={note.url} />
          </div>
        )}
      </div>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

export default NoteScreen;
