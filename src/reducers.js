import { combineReducers } from "redux";
import { contentReducer } from "./modules/content";

export const rootReducer = combineReducers({
  content: contentReducer
  // add more if needed
});
