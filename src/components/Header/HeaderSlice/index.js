import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = headerSlice.actions;

export default headerSlice.reducer;
