import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import {
  capitalizeFirstLetter,
  extractContent,
  showFormattedDate,
} from "../utils";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HTMLReactParser from "html-react-parser/lib/index";

function NoteItem({ title, createdAt, body, id, onArchive, onDelete, note }) {
  return (
    <div className="note-item">
      <Link to={`/note/${id}`}>
        <p className="note-item__title">{capitalizeFirstLetter(title)}</p>
      </Link>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <div className="note-item__body">{HTMLReactParser(body)}</div>
      <div className="note-item__action">
        <ArchiveButton id={id} onArchive={onArchive} note={note} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteItem;
