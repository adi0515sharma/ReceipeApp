import { configureStore } from '@reduxjs/toolkit';
import counterSlice  from './Slices';
const rootReducer = configureStore({
    reducer: {
        counter: counterSlice,
        // other reducers...
    },
});


export default rootReducer;
