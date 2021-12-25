import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title here"
          className="notes__title-input"
        />
        <textarea
          placeholder="what do you want to share today?"
          className="notes__textarea "
        ></textarea>
        <div className="notes__image">
          <img src="https://m.supergeek.cl/noticias/site/artic/20211223/imag/foto_0000000820211223142108/gundam_ok.jpg" />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
