import React from "react";
import { useSelector } from "react-redux";
import { MdLightbulbOutline } from "react-icons/md";
import { RiInboxArchiveLine } from "react-icons/ri";
import Note from "./Note";
import styles from "./AllNotes.module.css";

function AllDisplayNotes({ notes }) {
  const { activeMenu } = useSelector((state) => state.sidebar);
  const { query } = useSelector((state) => state.header);
  // const debouncedQuery = useCallback(()=>debounce(somefn, 300),[]);
  let pinnedNotes = notes?.filter((note) => note.pinned && !note.archive);
  let othersNotes = notes?.filter((note) => !note.pinned && !note.archive);

  if (query) {
    return notes.map((note, index) => {
      if (note.title.includes(query) || note.description.includes(query)) {
        return <Note key={note.id} note={note} index={index} />;
      }
      return null;
    });
  } else if (activeMenu === "notes") {
    return (
      <>
        {pinnedNotes.length ? <p>PINNED</p> : null}
        {notes.map((note, index) => {
          if (note && note?.pinned && !note.archive) {
            return <Note key={note.id} note={note} index={index} />;
          }
          return null;
        })}
        {othersNotes.length && pinnedNotes.length ? <p>OTHERS</p> : null}
        {notes.map((note, index) => {
          if (note && !note.pinned && !note.archive) {
            return <Note key={note.id} note={note} index={index} />;
          }
          return null;
        })}
        {!notes.length ? (
          <div className={styles.noDataContainer}>
            <MdLightbulbOutline className={styles.noDataIcon} />
            <p>Notes you add appear here</p>
          </div>
        ) : null}
      </>
    );
  } else if (activeMenu === "archive") {
    return (
      <>
        {notes.map((note, index) => {
          if (note.archive) {
            return <Note key={note.id} note={note} index={index} />;
          }
          return null;
        })}
        {!notes.length ? (
          <div className={styles.noDataContainer}>
            <RiInboxArchiveLine className={styles.noDataIcon} />
            <p>Archived Notes you add appear here</p>
          </div>
        ) : null}
      </>
    );
  }
}

export default AllDisplayNotes;

// function debounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     let that = this;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(that, args);
//     }, delay);
//   };
// }
