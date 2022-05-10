import initialState from "./initialState";
import rootReducer from "../reducers/rootReducer";
import { legacy_createStore } from "redux";

// const configureStore = () => {
//   return createStore(rootReducer, initialState);
// };
const store = legacy_createStore(rootReducer, initialState)

export default store


