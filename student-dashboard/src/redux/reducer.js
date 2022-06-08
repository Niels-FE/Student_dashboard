import { createSlice, current } from "@reduxjs/toolkit";
import { dataModel } from "../data/data_output.js";

export const reducer = createSlice({
    name: "studentInfo",
    initialState: {
        allStudents: dataModel,
        currentStudent: null,
    },
    reducers: {
        setCurrent: (state, action) => {
            console.log(action);
        },
    },
})

export const { setCurrent } = reducer.actions;
export default reducer.reducer;