import { configureStore } from '@reduxjs/toolkit';
import counterSlice  from './SelectAreaFoodSlice';
import createSagaMiddleware from 'redux-saga'
import { fetchArea } from './SelectAreaFoodSlice';
import { takeLatest } from 'redux-saga/effects';
import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';
import lastSuggestionListSlice from './LastSuggestionList';
import lastSearchedSlice from './LastSearchResultSlice';

import { FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]


let persistConfig = {
  key : "root",
  storage : AsyncStorage
}

let rootReducer = combineReducers({
  
    area: counterSlice,
    lastSuggestionListSlice : lastSuggestionListSlice,
    lastSearchedSlice : lastSearchedSlice
})


let persistedReducer = persistReducer(persistConfig, rootReducer) 

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(middleware)
    
});

function* watchFetchData() {
    yield takeLatest("FETCH_DATA_REQUEST", fetchArea);
  }


sagaMiddleware.run(watchFetchData)

