import { createSlice, current } from "@reduxjs/toolkit";
import { output } from "../data/data_output.js";

export const reducer = createSlice({
    name: "studentInfo",
    initialState: {
        output,
        currentStudent: "All",
        visual: "bar"
    },
    reducers: {
        setVisual: (state, action) => {
            state.visual = action.payload;
        },
        changeStudent: (state, action) => {
            state.currentStudent = action.payload;
        }
    },
})

export const { setVisual, changeStudent } = reducer.actions;
export default reducer.reducer;


