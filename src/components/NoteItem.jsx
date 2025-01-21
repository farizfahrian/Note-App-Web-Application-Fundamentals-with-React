import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import { showFormattedDate } from "../utils";

function NoteItem({ title, createdAt, body, id, onArchive, onDelete }) {
    return (
        <div className="note-item">
            <div>
                <p className="note-item__title">{title}</p>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>
            </div>
            <div className="note-item__action">
                <ArchiveButton id={id} onArchive={onArchive} />
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}

export default NoteItem;
