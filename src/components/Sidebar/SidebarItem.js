import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveMenu } from "./SidebarSlice";
import styles from "./Sidebar.module.css";

function SidebarItem({ item }) {
  const { activeMenu } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const classNameDiv = `${styles.sidebarItem} ${
    activeMenu === item.key ? styles.active : ""
  }`;
  const activeMenuHandler = () => {
    dispatch(setActiveMenu(item.key));
  };
  return (
    <div className={classNameDiv} onClick={activeMenuHandler}>
      <item.icon className={activeMenu === item.key ? styles.activeIcon : ""} />
      <p className={styles.sidebarItemLabel}>{item.label}</p>
    </div>
  );
}

export default SidebarItem;
