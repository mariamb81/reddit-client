import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { posts } from "../../functions/testData";
import {
  getFormattedHomepageData,
  getFormattedFilteredData,
  formatPostData,
  getPostsByFilter,
  getFormattedSearchData,
} from "./getPosts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await getFormattedHomepageData();
  return response;
});
export const fetchPostsBySubreddit = createAsyncThunk(
  "posts/fetchPostsBySubreddit",
  async (title) => {
    const response = await getFormattedFilteredData(title);
    return response;
  }
);
export const fetchPostsByFilter = createAsyncThunk(
  "posts/fetchPostsByFilter",
  async ({ subreddit, filter }) => {
    const response = await getPostsByFilter({
      subreddit: subreddit,
      filter: filter,
    });
    const data = await formatPostData(response);
    return data;
  }
);

export const fetchPostsBySearchQuery = createAsyncThunk(
  "search/fetchPostsBySearchQuery",
  async (searchQuery) => {
    const response = await getFormattedSearchData(searchQuery);
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
  reducers: {},
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
      })
      .addCase(fetchPostsBySubreddit.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostsBySubreddit.fulfilled, (state, action) => {
        state.status = "succeded";
        state.posts = action.payload;
      })
      .addCase(fetchPostsBySubreddit.rejected, (state) => {
        state.status = "failed";
        state.error = "Posts could not be retrieved";
      })
      .addCase(fetchPostsByFilter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostsByFilter.fulfilled, (state, action) => {
        state.status = "succeded";
        state.posts = action.payload;
      })
      .addCase(fetchPostsByFilter.rejected, (state) => {
        state.status = "failed";
        state.error = "Posts could not be retrieved";
      })
      .addCase(fetchPostsBySearchQuery.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostsBySearchQuery.fulfilled, (state, action) => {
        state.status = "succeded";
        state.posts = action.payload;
      })
      .addCase(fetchPostsBySearchQuery.rejected, (state) => {
        state.status = "failed";
        state.error = "Posts could not be retrieved";
      });
  },
});

export const selectPosts = (state) => state.posts.posts;
export default postsSlice.reducer;
