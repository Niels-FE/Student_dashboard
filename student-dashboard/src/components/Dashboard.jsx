import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BarView } from './BarView.jsx';
import { Table } from './Table.jsx';
import { LineView } from './LineView.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { output } from "../data/data_output.js";
import { startState } from "../redux/reducer.js"

export const Dashboard = () => {

    const allData = useSelector(state => state.output);
    const visual = useSelector(state => state.visual);
    const currentStudent = useSelector(state => state.currentStudent);
    const dispatch = useDispatch();

    if (allData.length === 0) {
        const outputState = output.map(item => ({ Name: item.Name, Project: item.Project, Difficulty: Number(item.Difficulty), Funfactor: Number(item.Funfactor) }));
        dispatch(startState(outputState));
    }


    const listOfNames = []
    listOfNames.push("All");
    allData.forEach(object => {
        if (!listOfNames.includes(object.Name)) {
            listOfNames.push(object.Name);
        }
    })
    listOfNames.sort();

    const calculateAverage = () => {
        const allInfo = [];

        const allProjects = [];
        for (const [key, value] of Object.entries(allData)) {
            if (!allProjects.includes(value.Project)) {
                allProjects.push(value.Project);
            }
        }

        const calculate = (numbers) => {
            let total = 0;
            const count = numbers.length;
            numbers.forEach(number => total = total + number);
            return (total / count)
        }

        allProjects.forEach(project => {
            const allNumbersDifficult = [];
            const allNumbersFun = [];
            allData.filter(data => {
                if (data.Project === project) {
                    allNumbersDifficult.push(Number(data.Difficulty));
                    allNumbersFun.push(Number(data.Funfactor));
                }
            })
            allInfo.push({ Project: project, Difficulty: calculate(allNumbersDifficult), Funfactor: calculate(allNumbersFun) })
        })
        return allInfo;
    }

    let useData;
    if (currentStudent !== 'All') {
        const studentData = allData.filter(data => data.Name === currentStudent);
        const fixedData = []
        studentData.forEach((datapoint) => {
            const project = datapoint.Project;
            const difficulty = Number(datapoint.Difficulty);
            const funfactor = Number(datapoint.Funfactor);
            fixedData.push({ Project: project, Difficulty: difficulty, Funfactor: funfactor })
        })
        useData = studentData;
    } else {
        useData = calculateAverage();
    }

    const currentVisual = visual === "bar" ? <BarView data={useData} /> : visual === "line" ? <LineView data={useData} /> : <Table data={useData} />;

    const routes = listOfNames.map(name => { return name === "All" ? <Route key="0" path={`/`} element={currentVisual}></Route> : <Route key={name} path={`/${name}`} element={currentVisual}></Route> });

    return (
        <section className="grid grid-cols-8 gap-4">
            <Routes>
                {routes}
            </Routes>
        </section>

    )
}