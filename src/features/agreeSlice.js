import { createSlice } from "@reduxjs/toolkit";

export const agreeSlice = createSlice({
  name: "agree",
  initialState: {
    agree: false,
  },
  reducers: {
    agreed: (state, action) => {
      state.agree = true;
    },
    notagreed: (state) => {
      state.agree = false;
    },
  },
});

export const { agreed, notagreed } = agreeSlice.actions;

//Selector
export const selectAgree = (state) => state.agree.agree;

export default agreeSlice.reducer;
