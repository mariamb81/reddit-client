import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./components/posts/postsSlice";
import subredditsReducer from "./components/subreddits/subredditsSlice";
import commentsReducer from "./components/comments/commentsSlice";
const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddits: subredditsReducer,
    comments: commentsReducer,
  },
});
export default store;
