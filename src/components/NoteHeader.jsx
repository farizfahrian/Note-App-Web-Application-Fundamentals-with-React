import React from "react";
import NoteSearchInput from "./NoteSearchInput";

function NoteHeader({ onSearch }) {
    return (
        <header className="note-app__header">
            <h1>Notes App</h1>
            <NoteSearchInput onSearch={onSearch} />
        </header>
    )
}

export default NoteHeader;