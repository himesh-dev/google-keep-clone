import React from "react";
import { useSelector } from "react-redux";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import { MdLightbulbOutline } from "react-icons/md";
import { RiInboxArchiveLine } from "react-icons/ri";

function Sidebar() {
  const { isMenuOpen } = useSelector((state) => state.sidebar);
  const sidebarItems = [
    {
      key: "notes",
      icon: MdLightbulbOutline,
      label: "Notes",
    },
    {
      key: "archive",
      icon: RiInboxArchiveLine,
      label: "Archive",
    },
  ];
  const classNameSidebarContainer = `${styles.sidebarContainer} ${
    isMenuOpen ? styles.sidebarOpen : ""
  }`;
  return (
    <aside className={classNameSidebarContainer}>
      {sidebarItems.map((item) => {
        return <SidebarItem key={item.key} item={item} />;
      })}
    </aside>
  );
}

export default Sidebar;
