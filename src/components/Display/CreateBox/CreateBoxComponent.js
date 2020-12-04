import React from "react";
import TextareaAutosize from "react-textarea-autosize";

import Action from "../../Action";
import styles from "./CreatBox.module.css";

function CreateBoxComponent({
  expand,
  expandHandler,
  inputChangeHandler,
  onPinHandler,
  onArchiveHandler,
  onCloseHandler,
  note,
}) {
  return (
    <div className={styles.createBoxContainer}>
      {expand && (
        <input
          value={note.title}
          name="title"
          placeholder="Title"
          className={styles.createBoxInput}
          onChange={inputChangeHandler}
          autoComplete="off"
        />
      )}
      <TextareaAutosize
        value={note.description}
        name="description"
        placeholder="Take Notes..."
        autoComplete="off"
        className={styles.createBoxTextarea}
        onClick={expandHandler}
        onChange={inputChangeHandler}
        data-gramm_editor="false"
      />
      {expand && (
        <div className={styles.createBoxActions}>
          <Action
            isPinned={note.pinned}
            isArchived={note.archive}
            onPinHandler={onPinHandler}
            onArchiveHandler={onArchiveHandler}
          />
          <button onClick={onCloseHandler}>Close</button>
        </div>
      )}
    </div>
  );
}

export default CreateBoxComponent;
