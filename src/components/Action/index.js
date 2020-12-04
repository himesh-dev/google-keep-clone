import React from "react";
import {
  RiPushpin2Line,
  RiPushpin2Fill,
  RiInboxArchiveLine,
  RiInboxUnarchiveLine,
} from "react-icons/ri";
import styles from "./Action.module.css";

function Action({ isPinned, isArchived, onPinHandler, onArchiveHandler }) {
  const PinIcon = isPinned ? RiPushpin2Fill : RiPushpin2Line;
  const ArchiveIcon = isArchived ? RiInboxUnarchiveLine : RiInboxArchiveLine;
  return (
    <div>
      <PinIcon className={styles.actionIcons} onClick={onPinHandler} />
      <ArchiveIcon className={styles.actionIcons} onClick={onArchiveHandler} />
    </div>
  );
}

export default Action;
