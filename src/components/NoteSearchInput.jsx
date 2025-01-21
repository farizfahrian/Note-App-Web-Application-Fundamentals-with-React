import React from "react";

function NoteSearchInput({ onSearch }) {
    return (
        <input
            type="search"
            onChange={(event) => onSearch(event.target.value)}
            placeholder="Cari judul catatan"
        />
    )
}

export default NoteSearchInput;