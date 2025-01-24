import React, { Component } from "react";
import {
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
  getAllNotes,
} from "../utils/local-data";
import NoteList from "../components/NoteList";
import NoteSearchInput from "../components/NoteSearchInput";

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
    };
  }

  onArchiveHandler = (id) => {
    const note = getNote(id);
    // Toggle archive state
    note.archived ? unarchiveNote(id) : archiveNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  };

  onArchive = (id) => {
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  };

  onDeleteHandler = (id) => {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  };

  render() {
    return (
      <section>
        <NoteSearchInput />
        <NoteList
          notes={this.state.notes}
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
      </section>
    );
  }
}

export default HomePage;
