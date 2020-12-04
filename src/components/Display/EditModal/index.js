import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsModalOpen,
  setCurrentNotes,
  setCurrentNotesIndex,
  updateNotes,
} from "../DisplaySlice";
import Modal from "../../Modal";
import CreateBoxComponent from "../CreateBox/CreateBoxComponent";

function EditModal() {
  const dispatch = useDispatch();
  const { isModalOpen, currentNotes, currentNotesIndex } = useSelector(
    (state) => state.display
  );
  const [notes, setNotes] = useState({
    id: "",
    title: "",
    description: "",
    pinned: false,
    archive: false,
  });
  useEffect(() => {
    setNotes({ ...currentNotes });
  }, [currentNotes]);
  const onClose = () => {
    dispatch(setIsModalOpen(false));
    dispatch(setCurrentNotesIndex(null));
    dispatch(setCurrentNotes(null));
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
    let updatedNotes = { ...note };
    let updateObj = { index: currentNotesIndex, updatedNotes };
    dispatch(updateNotes(updateObj));
    onClose();
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
    let updatedNotes = { ...notes, pinned: false, archive: !notes.archive };
    onCloseHandler({ note: updatedNotes });
  };

  return (
    <Modal isOpen={isModalOpen} onClose={onClose}>
      <CreateBoxComponent
        expand={true}
        note={notes}
        inputChangeHandler={inputChangeHandler}
        onCloseHandler={onCloseHandler}
        onPinHandler={onPinHandler}
        onArchiveHandler={onArchiveHandler}
      />
    </Modal>
  );
}

export default EditModal;
