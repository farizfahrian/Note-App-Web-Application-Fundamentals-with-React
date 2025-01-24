import React, { Component } from "react";
import { getNote } from "../utils/local-data";
import NoteItem from "../components/NoteItem";
import { useSearchParams } from "react-router-dom";
import NoteSearchInput from "../components/NoteSearchInput";

function SearchPageWrapper() {
  const { searchParams, setSearchParams } = useSearchParams();
  const title = searchParams.get("title");

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return <SearchPage onSearch={changeSearchParams} activeKeyword={title} />;
}

export class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: props.activeKeyword ? getNote(props.activeKeyword) : [],
    };
  }

  onSearch = (keyword) => {
    this.setState(() => {
      return {
        foundNote: searchNotes(keyword),
      };
    });

    this.props.onSearch(keyword);
  };

  render() {
    return (
      <section>
        <NoteSearchInput
          onSearch={this.onSearch}
          defaultKeyword={this.props.activeKeyword}
        />
        <NoteItem {...this.state.note} />
      </section>
    );
  }
}

export default SearchPageWrapper;
