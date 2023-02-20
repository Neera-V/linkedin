import { createSlice } from "@reduxjs/toolkit";

export const joinSlice = createSlice({
  name: "join",
  initialState: {
    join: false,
  },
  reducers: {
    joinnow: (state, action) => {
      state.join = true;
    },
    joined: (state) => {
      state.join = false;
    },
  },
});

export const { joinnow, joined } = joinSlice.actions;

//Selector
export const selectJoin = (state) => state.join.join;

export default joinSlice.reducer;
