import React from "react";
import NoteSearchInput from "./NoteSearchInput";
import PropTypes from "prop-types";

function NoteHeader({ onSearch }) {
  return (
    <header className="note-app__header">
      <h1>Notes App</h1>
      <NoteSearchInput onSearch={onSearch} />
    </header>
  );
}

NoteHeader.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default NoteHeader;
