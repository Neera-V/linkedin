import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import joinReducer from "../features/joinSlice";
import agreeReducer from "../features/agreeSlice";
import submitReducer from "../features/submitSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    join: joinReducer,
    agree: agreeReducer,
    submit: submitReducer,
  },
});
