import { createSlice, current } from "@reduxjs/toolkit";
import { dataModel } from "../data/data_output.js";

export const reducer = createSlice({
    name: "studentInfo",
    initialState: {
        allStudents: dataModel,
        currentStudent: null,
        visual: "bar"
    },
    reducers: {
        setVisual: (state, action) => {
            state.visual = action.payload;
        },
    },
})

export const { setVisual } = reducer.actions;
export default reducer.reducer;