import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  activeMenu: "notes",
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setIsMenuOpen(state, action) {
      state.isMenuOpen = action.payload;
    },
    setActiveMenu(state, action) {
      state.activeMenu = action.payload;
    },
  },
});

export const { setIsMenuOpen, setActiveMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;
