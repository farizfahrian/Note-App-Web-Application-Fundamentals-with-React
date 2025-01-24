import React from "react";
import NoteHeader from "./NoteHeader";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import {
  addNote,
  archiveNote,
  deleteNote,
  getAllNotes,
} from "../utils/local-data";
import AddPage from "../page/AddPage";
import HomePage from "../page/HomePage";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
      searchQuery: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNoteHandler({ noteData }) {
    addNote(noteData);
    this.setState({ notes: getAllNotes() });
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.setState({ notes: getAllNotes() });
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState({ notes: getAllNotes() });
  }

  onSearchHandler(searchQuery) {
    this.setState({ searchQuery });
  }

  render() {
    // const filteredSearchNotes = this.state.notes.filter((note) =>
    //   note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    // );
    return (
      <div>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* <NoteHeader onSearch={this.onSearchHandler} />
        <NoteInput addNote={this.onAddNoteHandler} />
        <NoteList
          notes={filteredSearchNotes}
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        /> */}
      </div>
    );
  }
}

export default NoteApp;
