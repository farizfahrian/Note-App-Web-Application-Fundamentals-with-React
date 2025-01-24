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

function NoteDetail({ title, createdAt, body }) {
  return (
    <div className="note-item">
      <div>
        <p className="note-item__title">{capitalizeFirstLetter(title)}</p>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{extractContent(body)}</p>
      </div>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteDetail;
