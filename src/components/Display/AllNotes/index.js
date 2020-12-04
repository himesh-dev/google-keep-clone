import React from "react";
import AllDisplayNotes from "./AllDisplayNotes";
import { useSelector } from "react-redux";
import styles from "./AllNotes.module.css";

function AllNotes() {
  const { notes } = useSelector((state) => state.display);
  let allNotes = [...notes];
  return (
    <div className={styles.allNotesContainer}>
      <AllDisplayNotes notes={allNotes} />
    </div>
  );
}

export default AllNotes;
