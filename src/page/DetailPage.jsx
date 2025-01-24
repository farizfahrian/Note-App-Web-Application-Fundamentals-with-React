import React, { Component } from "react";
import { getNote } from "../utils/local-data";
import NoteItem from "../components/NoteItem";
import { useParams } from "react-router-dom";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

export class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    if (this.state.movie === null) {
      return <p>Note tidak ditemukan</p>;
    }

    return (
      <section>
        <NoteItem {...this.state.note} />
      </section>
    );
  }
}

export default DetailPageWrapper;
