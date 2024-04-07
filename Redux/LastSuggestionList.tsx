import { createSlice } from '@reduxjs/toolkit';


const lastSuggestedSlice = createSlice({
    name: 'suggestedSlice',
    initialState: {
      value: null,
      error: null,
      loading : true
    },
    reducers: {
      updateLastSuggestedList: (state, payload) => {  
        state.value = payload.payload;
      },
    
    },
  });
  

export const { updateLastSuggestedList } = lastSuggestedSlice.actions;
export default lastSuggestedSlice.reducer;