import { combineReducers } from "@reduxjs/toolkit";
import display from "../components/Display/DisplaySlice";
import sidebar from "../components/Sidebar/SidebarSlice";
import header from "../components/Header/HeaderSlice";
const rootReducer = combineReducers({
  display,
  sidebar,
  header,
});

export default rootReducer;
