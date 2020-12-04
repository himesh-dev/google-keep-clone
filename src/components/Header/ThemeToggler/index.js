import React, { useState, useEffect } from "react";
import { BsMoon } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";
import styles from "./ThemeToggler.module.css";

function ThemeToggler() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const themeName = localStorage.getItem("theme");
    if (!themeName) {
      localStorage.setItem("theme", "theme-light");
    }
    document.documentElement.className = themeName ? themeName : "theme-light";
    setDark(themeName === "theme-dark");
  }, []);
  const toggleTheme = () => {
    if (dark) {
      document.documentElement.className = "theme-light";
      localStorage.setItem("theme", "theme-light");
    } else {
      document.documentElement.className = "theme-dark";
      localStorage.setItem("theme", "theme-dark");
    }
    setDark(!dark);
  };
  return (
    <div className={styles.ThemeTogglerBox}>
      <button
        type="button"
        className={styles.ThemeTogglerButton}
        onClick={toggleTheme}
      >
        {dark ? <MdWbSunny /> : <BsMoon />}
      </button>
    </div>
  );
}

export default ThemeToggler;
