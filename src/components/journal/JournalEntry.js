import React from "react";
import moment from "moment";
import { activeNote } from "../../actions/notes";
import { useDispatch } from "react-redux";

const JournalEntry = (note) => {
  const dispatch = useDispatch();
  const { id, date, url, title, body } = note;
  const noteDate = moment(date);
  //console.log(id, date, title, body, url);
  //when user clicks a note et it as active and shoe in NoteScreen component
  const handleEntryClick = (idEntry) => {
    //console.log(idEntry);
    dispatch(activeNote(idEntry, note));
  };
  return (
    <div
      onClick={() => handleEntryClick(id)}
      className="journal__entry pointer"
    >
      {
        //if url is undefined don't show images divs
        url && (
          <div
            className="journal__entry-picture"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${url})`,
            }}
          ></div>
        )
      }
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{noteDate.format("ddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
