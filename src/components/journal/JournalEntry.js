import React from "react";

const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://img.texasmonthly.com/2017/03/reporter-nature-the-stars-at-night-e1492539134348.jpg?auto=compress&crop=faces&fit=crop&fm=jpg&h=1050&ixlib=php-1.2.1&q=45&w=1400)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">A newd day</p>
        <p className="journal__entry-content">
          aasjdkfl jkasdljjdjj jkk jkjkj=p33.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
