import { createSlice } from "@reduxjs/toolkit";
import { getSearchQuery } from "./search";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = getSearchQuery(action.payload);
    },
  },
});
export const { setSearchQuery } = searchSlice.actions;
export const selectSearchQuery = (state) => state.search.searchQuery;
export default searchSlice.reducer;
