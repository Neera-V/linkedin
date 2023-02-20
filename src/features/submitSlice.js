import { createSlice } from "@reduxjs/toolkit";

export const submitSlice = createSlice({
  name: "submit",
  initialState: {
    submit: false,
  },
  reducers: {
    submitted: (state) => {
      state.submit = true;
    },
    notsubmitted: (state) => {
      state.submit = false;
    },
  },
});

export const { submitted, notsubmitted } = submitSlice.actions;

//Selector
export const selectsubmit = (state) => state.submit.submit;

export default submitSlice.reducer;
