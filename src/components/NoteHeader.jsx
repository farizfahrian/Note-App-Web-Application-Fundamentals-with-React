import React from "react";
import { Link } from "react-router-dom";

function NoteHeader() {
  return (
    <nav className="note-app__header">
      <Link to="/">
        <h1>Notes App</h1>
      </Link>
      <Link to="/add">Tambah Catatan</Link>
    </nav>
  );
}

export default NoteHeader;
