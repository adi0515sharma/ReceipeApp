import { createSlice } from '@reduxjs/toolkit';
import GetAllArea from '../API/ListArea';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { NewLineKind } from 'typescript';




const areaSlice = createSlice({
  name: 'area',
  initialState: {
    value: {continantal : [], selectedContinantal : []},
    error: null,
    loading : true
  },
  reducers: {
    addArea: (state, payload) => {
    

      state.value.continantal = payload.payload;
      state.loading = false
    },

    updateSelected: (state, payload) =>{

      let currentSelectedContinantal = [...state.value.selectedContinantal]
      if(currentSelectedContinantal.find(item => item.strArea === payload.payload.strArea)){
        const newSelectedList = currentSelectedContinantal.filter(item => item.strArea !== payload.payload.strArea);
        state.value.selectedContinantal = newSelectedList
      }
      else{
        state.value.selectedContinantal.push(payload.payload)
      }
    
    },
    addError: (state, payload) => {
      state.error = payload.payload;
      state.loading = false
    },
    
  },
});


export function* fetchArea() {
  try {
     const user = yield call(GetAllArea);
     yield put(addArea(user));
  } catch (e) {
     yield put(addError(e.message));
  }
}

export const fetchDataRequest = () => (
  {
  type: "FETCH_DATA_REQUEST"
}
);

export const { addArea, addError, updateSelected } = areaSlice.actions;
export default areaSlice.reducer;
