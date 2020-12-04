import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

function saveStateToLocal(state) {
  try {
    const seralizedState = JSON.stringify(state);
    localStorage.setItem("state", seralizedState);
  } catch (err) {
    console.log(err);
  }
}
function loadStateFromLocal() {
  try {
    const seralizedState = localStorage.getItem("state");
    if (seralizedState === null) return undefined;
    return JSON.parse(seralizedState);
  } catch (err) {
    console.log(err);
  }
}
const persistedState = loadStateFromLocal();
const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});
store.subscribe(() => saveStateToLocal(store.getState()));
export default store;
