import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import {
  capitalizeFirstLetter,
  extractContent,
  showFormattedDate,
} from "../utils";
import PropTypes from "prop-types";

function NoteItem({ title, createdAt, body, id, onArchive, onDelete }) {
  return (
    <div className="note-item">
      <div>
        <p className="note-item__title">{capitalizeFirstLetter(title)}</p>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <div className="note-item__body">{extractContent(body)}</div>
      </div>
      <div className="note-item__action">
        <ArchiveButton id={id} onArchive={onArchive} />
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
