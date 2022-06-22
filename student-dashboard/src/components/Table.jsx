import React from 'react';
import { useSelector } from 'react-redux';

export const Table = ({ data }) => {

    const currentStudent = useSelector(state => state.currentStudent);

    let even = false;
    const tableInput = data.map((item) => {
        even = !even;
        return <tr key={`${item.Project} - ${item.Difficulty}`} className={even ? "bg-blue-100" : null}><td>{item.Project}</td><td>{item.Difficulty}</td><td>{item.Funfactor}</td></tr>
    })

    if (currentStudent === "All") {
        return (
            <div className="col-span-4 row-start-1 w-full">
                <aside className="bg-red-500 text-white p-4">
                    <strong>You can't watch this in "all" view. please select a student</strong>
                </aside>
            </div>
        )
    } else {
        return (
            <div className="col-span-8 row-start-1 row-end-4 w-full">
                <table className="w-full">
                    <thead>
                        <tr className="bg-blue-100" colSpan="3"><th className="py-2" colSpan="3">Numbers from {currentStudent}</th></tr>
                        <tr className="border-b-2">
                            <th className="pt-2">Project</th>
                            <th className="pt-2">Difficulty</th>
                            <th className="pt-2">Funfactor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableInput}
                    </tbody>
                </table>
            </div>
        )
    }
}