import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { subreddits } from "../../functions/fakeData";
const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: subreddits,
        status: 'idle'
    },
    reducers: {
        
    },
    extraReducers: {
        
    }
});

export const selectSubreddits = state => state.subreddits.subreddits;
export default subredditsSlice.reducer;