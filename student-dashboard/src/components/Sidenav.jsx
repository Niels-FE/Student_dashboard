import React from 'react';
import { changeStudent } from "../redux/reducer.js";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

export const Sidenav = () => {

    const dispatch = useDispatch();
    const changeCurrentName = (option) => {
        dispatch(changeStudent(option));
    }

    const currentStudent = useSelector(state => state.currentStudent);
    const styleCurrent = "text-sm font-bold mx-2 text-blue-600 border-b-2 border-blue-600";
    const styleNormal = "text-sm font-bold mx-2 cursor-pointer hover:text-blue-300";

    const listOfNames = []
    const names = useSelector(state => state.output);
    listOfNames.push("All");
    names.forEach(object => {
        if (!listOfNames.includes(object.Name)) {
            listOfNames.push(object.Name);
        }
    })
    listOfNames.sort();

    const elements = listOfNames.map(name => { return name === "All" ? <li className={currentStudent === name ? styleCurrent : styleNormal} ><Link className="p-2 w-full block" onClick={() => { changeCurrentName(name) }} to="/">{name}</Link></li> : <li className={currentStudent === name ? styleCurrent : styleNormal} ><Link className="p-2 w-full block" onClick={() => { changeCurrentName(name) }} to={`/${name}`}>{name}</Link></li> });

    return (
        <ul className="bg-white p-2">
            {elements}
        </ul>
    )
}