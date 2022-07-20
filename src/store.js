import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./components/posts/postsSlice";
import subredditsReducer from "./components/subreddits/subredditsSlice";
import commentsReducer from "./components/comments/commentsSlice";
import searchReducer from "./components/search/searchSlice"
const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddits: subredditsReducer,
    comments: commentsReducer,
    search: searchReducer,
  },
});
export default store;
