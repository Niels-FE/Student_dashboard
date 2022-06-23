import { createSlice } from "@reduxjs/toolkit";
import { output } from "../data/data_output.js";

const student = window.location.pathname !== "/" ? window.location.pathname.slice(1) : "All"

export const reducer = createSlice({
    name: "studentInfo",
    initialState: {
        output: [],
        currentStudent: student,
        visual: "bar"
    },
    reducers: {
        setVisual: (state, action) => {
            state.visual = action.payload;
        },
        changeStudent: (state, action) => {
            state.currentStudent = action.payload;
        },
        startState: (state, action) => {
            state.output = action.payload;
        }
    },
})

export const { setVisual, changeStudent, startState } = reducer.actions;
export default reducer.reducer;


