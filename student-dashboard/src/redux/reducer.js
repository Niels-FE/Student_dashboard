import { createSlice } from "@reduxjs/toolkit";
import { output } from "../data/data_output.js";

const student = window.location.pathname !== "/" ? window.location.pathname.slice(1) : "All"
const outputState = output.map(item => ({ Name: item.Name, Project: item.Project, Difficulty: Number(item.Difficulty), Funfactor: Number(item.Funfactor) }))

export const reducer = createSlice({
    name: "studentInfo",
    initialState: {
        output: outputState,
        currentStudent: student,
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


