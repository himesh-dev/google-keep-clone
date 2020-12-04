import React from "react";
import Action from "../../Action";
import { useDispatch } from "react-redux";
import styles from "./AllNotes.module.css";
import iconStyles from "../../Action/Action.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  deleteNotes,
  addNotes,
  setCurrentNotes,
  setIsModalOpen,
  setCurrentNotesIndex,
} from "../DisplaySlice";

function Note({ note, index }) {
  const dispatch = useDispatch();
  const deleteNotesItem = (e) => {
    e.stopPropagation();
    dispatch(deleteNotes(index));
  };
  const onPinHandler = (e) => {
    e.stopPropagation();
    const updatedNotes = { ...note, pinned: !note.pinned, archive: false };
    deleteNotesItem(e);
    dispatch(addNotes(updatedNotes));
  };
  const onArchiveHandler = (e) => {
    e.stopPropagation();
    const updatedNotes = { ...note, pinned: false, archive: !note.archive };
    deleteNotesItem(e);
    dispatch(addNotes(updatedNotes));
  };
  const noteEditHandler = () => {
    dispatch(setIsModalOpen(true));
    dispatch(setCurrentNotes(note));
    dispatch(setCurrentNotesIndex(index));
  };

  return (
    <div className={styles.noteCard} onClick={noteEditHandler}>
      <div className={styles.noteCardTexts}>
        {note.title && <h4 className={styles.noteTitle}>{note.title}</h4>}
        {note.description && (
          <p className={styles.noteDescription}>{note.description}</p>
        )}
      </div>
      <div className={styles.noteCardActionContainer}>
        <div className={styles.noteCardAction}>
          <Action
            isPinned={note.pinned}
            isArchived={note.archive}
            onPinHandler={onPinHandler}
            onArchiveHandler={onArchiveHandler}
          />
          <RiDeleteBin6Line
            className={iconStyles.actionIcons}
            onClick={deleteNotesItem}
          />
        </div>
      </div>
    </div>
  );
}

export default Note;
