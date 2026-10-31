import { createStore } from "redux";

import { tasksReducer } from "./reducers/tasksReducer.js";

export const store = createStore(tasksReducer);