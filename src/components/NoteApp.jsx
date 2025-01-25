import React from "react";
import NoteHeader from "./NoteHeader";
import AddPage from "../page/AddPage";
import HomePage from "../page/HomePage";
import NotFound from "./NotFound";
import DetailPage from "../page/DetailPage";
import { Route, Routes } from "react-router-dom";
import { getAllNotes } from "../utils/local-data";

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default NoteApp;
