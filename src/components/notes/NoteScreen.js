import React from "react";
import { useSelector } from "react-redux";
import NotesAppBar from "./NotesAppBar";
import useForm from "../hooks/useForm";

const NoteScreen = () => {
  const { active: activeNote } = useSelector((state) => state.notes);
  const [formValues, handleInputChange] = useForm(activeNote);

  const { body, title } = formValues;
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
        />
        <textarea
          placeholder="what do you want to share today?"
          className="notes__textarea "
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {activeNote.url && (
          <div className="notes__image">
            <img src="https://m.supergeek.cl/noticias/site/artic/20211223/imag/foto_0000000820211223142108/gundam_ok.jpg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteScreen;
