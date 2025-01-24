import PropTypes from "prop-types";
import React from "react";

function NoteSearchInput({ onSearch }) {
  return (
    <input
      type="search"
      onChange={(event) => onSearch(event.target.value)}
      placeholder="Cari judul catatan"
      className="note-search-input"
    />
  );
}

NoteSearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default NoteSearchInput;
