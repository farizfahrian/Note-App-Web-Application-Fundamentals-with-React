import React, { Component } from "react";
import { archiveNote, deleteNote, getAllNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
    };
  }

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
        <NoteList
          notes={this.state.notes}
          onArchive={this.onArchive}
          onDelete={this.onDeleteHandler}
        />
      </section>
    );
  }
}

export default HomePage;
