import React from "react";
import NoteHeader from "./NoteHeader";
import AddPage from "../page/AddPage";
import HomePage from "../page/HomePage";
import NotFound from "./NotFound";
import DetailPage from "../page/DetailPage";
import { Route, Routes } from "react-router-dom";
import { getAllNotes } from "../utils/local-data";
import { SearchPage } from "../page/SearchPage";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
      searchQuery: "",
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(searchQuery) {
    this.setState({ searchQuery });
  }

  render() {
    return (
      <div>
        <NoteHeader onSearch={this.onSearchHandler} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/note/:id" element={<DetailPage />} />
            <Route path="/search" element={<SearchPage />} />
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
