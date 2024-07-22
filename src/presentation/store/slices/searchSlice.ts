import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  searchTerm: string;
  sortOption: string;
}

const initialState: SearchState = {
  searchTerm: '',
  sortOption: 'number', 
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
  },
});

export const { setSearchTerm, setSortOption } = searchSlice.actions;
export default searchSlice.reducer;
