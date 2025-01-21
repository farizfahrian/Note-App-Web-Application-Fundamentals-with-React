import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onArchive, onDelete }) {
    const activeNotes = notes.filter(note => !note.archived);
    const archivedNotes = notes.filter(note => note.archived);

    return (
        <>
            <div className="notes-list__container">
                <h2 className="notes-list__header">Daftar Catatan</h2>
                {
                    activeNotes.length !== 0 ?
                        <div className="notes-list">
                            {
                                activeNotes.map((note) => (
                                    <NoteItem
                                        key={note.id}
                                        id={note.id}
                                        onArchive={onArchive}
                                        onDelete={onDelete}
                                        {...note}
                                    />
                                ))
                            }
                        </div>
                        : <p className="notes-list__empty-message">Tidak ada catatan</p>
                }
            </div>
            <div className="notes-list__container">
                <h2 className="notes-list__header">Catatan Arsip</h2>
                {
                    archivedNotes.length !== 0 ?
                        <div className="notes-list">
                            {
                                archivedNotes.map((note) => (
                                    <NoteItem
                                        key={note.id}
                                        id={note.id}
                                        onArchive={onArchive}
                                        onDelete={onDelete}
                                        {...note}
                                    />
                                ))
                            }
                        </div>
                        : <p className="notes-list__empty-message">Tidak ada catatan</p>
                }
            </div>
        </>
    )
}

export default NoteList;