import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../HeaderSlice";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.header);
  const [show, setShow] = useState(false);

  const onInputHandler = (e) => {
    let queryVal = e ? e.target.value : "";
    dispatch(setQuery(queryVal));
  };
  const clearInput = () => {
    onInputHandler("");
    if (show) {
      setShow(false);
    }
  };
  const seaarchBarClassName = `${styles.searchBarBox} ${
    show ? styles.searchBarShow : ""
  }`;
  const mobileSearchHandler = () => {
    setShow(true);
  };
  return (
    <>
      <div className={seaarchBarClassName}>
        <AiOutlineSearch size={24} className={styles.searchIcon} />
        <input
          type="text"
          value={query}
          className={styles.searchBarInput}
          placeholder="Search"
          onChange={onInputHandler}
        />
        <MdClose size={16} className={styles.searchIcon} onClick={clearInput} />
      </div>
      {!show && (
        <AiOutlineSearch
          size={24}
          className={styles.searchIconMobile}
          onClick={mobileSearchHandler}
        />
      )}
    </>
  );
}

export default SearchBar;
