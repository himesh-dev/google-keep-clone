import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineMenu } from "react-icons/hi";
import keep from "../../assets/google-keep.svg";
import SearchBar from "./SearchBar";
import ThemeToggler from "./ThemeToggler";
import { setIsMenuOpen } from "../Sidebar/SidebarSlice";

function Header() {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.sidebar);
  const toggleSidebar = () => {
    dispatch(setIsMenuOpen(!isMenuOpen));
  };
  return (
    <header className="App-header">
      <div className="App-header-left">
        <div className="App-header-left-inner">
          <div className="App-menu-icon" onClick={toggleSidebar}>
            <HiOutlineMenu size={24} />
          </div>
          <img src={keep} alt="google-keep-clone" className="App-logo-icon" />
          <h2 className="App-title">Keep</h2>
        </div>
        <div className="App-header-center">
          <SearchBar />
        </div>
      </div>
      <div className="App-header-right">
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
