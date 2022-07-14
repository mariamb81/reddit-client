import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { posts } from "../../functions/fakeData";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: posts,
        status: 'idle'
    },
    reducers: {
        
    },
    extraReducers: {
    }
});

export const selectPosts = (state) => state.posts.posts;
export default postsSlice.reducer;