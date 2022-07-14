import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './components/posts/postsSlice'
import subredditsReducer from './components/subreddits/subredditsSlice'

const store = configureStore({
    reducer: {
        posts: postsReducer,
        subreddits: subredditsReducer,
    },
});
export default store;