import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { posts } from "../../functions/testData";
import { getFormattedHomepageData, getFormattedFilteredData } from "./getPosts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await getFormattedHomepageData();
  return response;
});
export const fetchPostsBySubreddit = createAsyncThunk(
  "posts/fetchPostsBySubreddit",
  async (title) => {
    const response = await getFormattedFilteredData();
    return response; 
  }
);
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "failed";
        state.error = "Posts could not be retrieved";
      });
  },
});

export const selectPosts = (state) => state.posts.posts;
export default postsSlice.reducer;
