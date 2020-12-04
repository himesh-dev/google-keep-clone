import React from "react";
import styles from "./Modal.module.css";

function Modal({ onClose, children }) {
  return (
    <div>
      <div className={styles.modalOverlay} onClick={onClose} />
      <div className={styles.modalBody}>{children}</div>
    </div>
  );
}

export default Modal;
