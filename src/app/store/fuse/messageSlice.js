import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: null,
  options: {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
    autoHideDuration: 2000,
    message: "Hi",
    variant: null,
  },
};
const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    showMessage: (state, action) => {
      if (action.payload.variiant === null) return;
      state.state = true;
      state.options = {
        ...initialState.options,
        ...action.payload,
      };
      console.log(
        "🚀 ~ file: messageSlice.js ~ line 24 ~ state.options",
        state.options
      );
    },
    hideMessage: (state, action) => {
      state.state = null;
    },
  },
});

export const { hideMessage, showMessage } = messageSlice.actions;

export const selectFuseMessageState = ({ fuse }) => fuse.message.state;

export const selectFuseMessageOptions = ({ fuse }) => fuse.message.options;

export default messageSlice.reducer;
