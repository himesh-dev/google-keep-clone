import React from "react";
import { useSelector } from "react-redux";

import CreateBox from "./CreateBox";
import AllNotes from "./AllNotes";
import styles from "./Display.module.css";
import EditModal from "./EditModal";

function Display() {
  const { isMenuOpen } = useSelector((state) => state.sidebar);

  const classNameAppDisplay = `${styles.appDisplay} ${
    isMenuOpen ? styles.sidebarOpen : ""
  }`;
  return (
    <>
      <div className={classNameAppDisplay}>
        <CreateBox />
        <AllNotes onOpen />
      </div>
      <EditModal />
    </>
  );
}

export default Display;
