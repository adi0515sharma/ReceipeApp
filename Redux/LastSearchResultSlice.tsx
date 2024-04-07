import { createSlice } from '@reduxjs/toolkit';


const lastSearchedSlice = createSlice({
    name: 'lastSearchedSlice',
    initialState: {
      value: null,
      error: null,
      loading : true
    },
    reducers: {
      updateLastSearchedList: (state, payload) => {  
        state.value = payload.payload;
      },
    
    },
  });
  

export const { updateLastSearchedList } = lastSearchedSlice.actions;
export default lastSearchedSlice.reducer;