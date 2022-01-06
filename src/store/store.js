import {configureStore} from "@reduxjs/toolkit";
import lineupReduces from '../slices/lineupSlice';
import formationsSlice from '../slices/formationsSlice';


const store = configureStore({
    reducer : {
        lineup : lineupReduces,
        formations : formationsSlice
    }
})

export default store;
