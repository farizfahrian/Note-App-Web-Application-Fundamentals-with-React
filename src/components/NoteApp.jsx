import React from "react";
import { getInitialData } from "../utils";
import NoteHeader from "./NoteHeader";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchQuery: '',
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date,
                        title,
                        body,
                        createdAt: +new Date,
                        archived: false,
                    }
                ]
            }
        })
    }

    onArchiveHandler(id) {
        this.setState((prevState) => {
            const notes = prevState.notes.map((note) => note.id === id ? { ...note, archived: !note.archived } : note)
            return { notes };
        })
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onSearchHandler(searchQuery) {
        this.setState({ searchQuery });
    }

    render() {
        const filteredSearchNotes = this.state.notes.filter(note =>
            note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        );
        return (
            <div>
                <NoteHeader onSearch={this.onSearchHandler} />
                <NoteInput addNote={this.onAddNoteHandler} />
                <NoteList
                    notes={filteredSearchNotes}
                    onArchive={this.onArchiveHandler}
                    onDelete={this.onDeleteHandler} />
            </div>
        )
    }
}

export default NoteApp;