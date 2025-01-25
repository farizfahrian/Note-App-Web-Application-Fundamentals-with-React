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
import { useSearchParams } from "react-router-dom";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title") || "";

  const handleSearch = (keyword) => {
    // if (keyword) {
    //   searchParams.set("title", keyword);
    // } else {
    //   searchParams.delete("title");
    // }
    setSearchParams({ title: keyword });
  };

  return <HomePage searchKeyword={title} onSearch={handleSearch} />;
}

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
    };
  }

  onArchiveHandler = (id) => {
    const note = getNote(id);
    note.archived ? unarchiveNote(id) : archiveNote(id);

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
    const { searchKeyword } = this.props;
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
      <section>
        <NoteSearchInput
          onSearch={this.props.onSearch}
          defaultKeyword={searchKeyword}
        />
        <NoteList
          notes={filteredNotes}
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
      </section>
    );
  }
}

export default HomePageWrapper;
