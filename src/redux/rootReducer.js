import { combineReducers } from "redux";
import testimonalReducer from "./Testimonal/testimonalReducer";

const rootReducer = combineReducers({
  testimonal: testimonalReducer,
});

export default rootReducer;
