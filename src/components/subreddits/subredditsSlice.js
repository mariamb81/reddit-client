import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { subreddits } from "../../functions/testData";
import { getFormattedSubredditData, formatSubredditData, getMoreSubreddits } from "./getSubreddits";

export const fetchSubreddits = createAsyncThunk(
  "subreddits/fetchSubreddits",
  async () => {
    const response = await getFormattedSubredditData();
    return response;
  }
);
export const fetchMoreSubreddits = createAsyncThunk(
  "subreddits/fetchMoreSubreddits",
  async () => {
    const response = await getMoreSubreddits();
    const data = await formatSubredditData(response);
    return data;
  }
);

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: [],
    status: "idle",
    error: null,
    currentSubreddit: "Home",
    currentSubredditIcon: "",
  },
  reducers: {
    selectSubreddit: (state, action) => {
        state.currentSubreddit = action.payload.name;
        state.currentSubredditIcon = action.payload.icon;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSubreddits.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.status = "succeded";
        state.subreddits = action.payload;
      })
      .addCase(fetchSubreddits.rejected, (state) => {
        state.status = "failed";
        state.error = "Subreddits could not be retrieved";
      })
      .addCase(fetchMoreSubreddits.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMoreSubreddits.fulfilled, (state, action) => {
        state.status = "succeded";
        state.subreddits = state.subreddits.concat(action.payload);
      })
      .addCase(fetchMoreSubreddits.rejected, (state) => {
        state.status = "failed";
        state.error = "Subreddits could not be retrieved";
      })
  },
});
export const { selectSubreddit } = subredditsSlice.actions;
export const selectCurrentSubreddit = (state) => state.subreddits.currentSubreddit;
export const selectSubreddits = (state) => state.subreddits.subreddits;
export default subredditsSlice.reducer;
