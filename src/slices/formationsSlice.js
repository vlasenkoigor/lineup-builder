import {createSlice} from "@reduxjs/toolkit";

const formationsSlice = createSlice({
    name : 'formations',
    initialState : [
        '442',
        '433'
    ],
})

export const selectFormations = state => state.formations;

export default formationsSlice.reducer;
