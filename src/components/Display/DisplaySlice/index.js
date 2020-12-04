import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  isModalOpen: false,
  currentNotes: null,
  currentNotesIndex: null,
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    addNotes(state, action) {
      state.notes.unshift(action.payload);
    },
    deleteNotes(state, action) {
      state.notes.splice(action.payload, 1);
    },
    updateNotes(state, action) {
      state.notes.splice(action.payload.index, 1, action.payload.updatedNotes);
    },
    setIsModalOpen(state, action) {
      state.isModalOpen = action.payload;
    },
    setCurrentNotes(state, action) {
      state.currentNotes = action.payload;
    },
    setCurrentNotesIndex(state, action) {
      state.currentNotesIndex = action.payload;
    },
  },
});

export const {
  addNotes,
  deleteNotes,
  updateNotes,
  setIsModalOpen,
  setCurrentNotes,
  setCurrentNotesIndex,
} = displaySlice.actions;

export default displaySlice.reducer;
