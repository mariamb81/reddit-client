import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFormattedComments } from "./getComments";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (permalink) => {
    const response = await getFormattedComments(permalink);
    return response;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    status: "idle",
    error: null,
    modalIsOpen: false,
  },
  reducers: {
    toggleModal: (state) => {
      if (state.modalIsOpen === false) {
        state.modalIsOpen = true;
      } else {
        state.modalIsOpen = false;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeded";
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.status = "failed";
        state.error = "Subreddits could not be retrieved";
      });
  },
});
export const selectComments = (state) => state.comments.comments;
export const selectCommentsStatus = (state) => state.comments.status;
export const selectModalIsOpen = (state) => state.comments.modalIsOpen;
export const { toggleModal } = commentsSlice.actions;

export default commentsSlice.reducer;
