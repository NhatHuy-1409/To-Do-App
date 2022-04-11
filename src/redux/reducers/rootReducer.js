import { combineReducers, createStore } from "redux";
import { toDoReducer } from "./toDoReducer";

export const rootReducer = combineReducers({
    toDoReducer
})
