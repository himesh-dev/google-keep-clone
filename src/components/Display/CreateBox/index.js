import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addNotes } from "../DisplaySlice";
import CreateBoxComponent from "./CreateBoxComponent";

let initialState = {
  title: "",
  description: "",
  pinned: false,
  archive: false,
};

function CreateBox() {
  const dispatch = useDispatch();

  const [expand, setExpand] = useState(false);
  const [notes, setNotes] = useState({ ...initialState });

  const expandHandler = () => {
    setExpand(true);
  };
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setNotes((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value,
      };
    });
  };
  const onCloseHandler = ({ note = notes }) => {
    if (note.title || note.description) {
      let updatedNotes = { ...note, id: uuidv4() };
      dispatch(addNotes(updatedNotes));
    }
    setExpand(false);
    setNotes({ ...initialState });
  };
  const onPinHandler = () => {
    setNotes((prevNotes) => {
      return {
        ...prevNotes,
        pinned: !prevNotes.pinned,
      };
    });
  };
  const onArchiveHandler = () => {
    let updatedNotes = { ...notes, id: uuidv4(), pinned: false, archive: true };
    onCloseHandler({ note: updatedNotes });
  };
  //comment
  return (
    <CreateBoxComponent
      expand={expand}
      expandHandler={expandHandler}
      inputChangeHandler={inputChangeHandler}
      onPinHandler={onPinHandler}
      onArchiveHandler={onArchiveHandler}
      onCloseHandler={onCloseHandler}
      note={notes}
    />
  );
}

export default CreateBox;
