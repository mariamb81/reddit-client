import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { subreddits } from "../../functions/testData";
import { getFormattedSubredditData } from "./getSubreddits";

export const fetchSubreddits = createAsyncThunk(
  "subreddits/fetchSubreddits",
  async () => {
    const response = await getFormattedSubredditData();
    return response;
  }
);

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: [],
    status: "idle",
    error: null,
    currentSubreddit: "home",
  },
  reducers: {
    selectSubreddit: (state, action) => {
        state.currentSubreddit = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSubreddits.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.status = "succeded";
        state.subreddits = state.subreddits.concat(action.payload);
      })
      .addCase(fetchSubreddits.rejected, (state) => {
        state.status = "failed";
        state.error = "Subreddits could not be retrieved";
      });
  },
});
export const { selectSubreddit } = subredditsSlice.actions;
export const selectCurrentSubreddit = (state) => state.subreddits.currentSubreddit;
export const selectSubreddits = (state) => state.subreddits.subreddits;
export default subredditsSlice.reducer;
