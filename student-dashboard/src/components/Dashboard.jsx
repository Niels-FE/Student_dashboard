import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { VictoryBar } from 'victory';


// https://formidable.com/open-source/victory/docs 
// https://www.justinmind.com/ui-design/dashboard-design-best-practices-ux

export const Dashboard = () => {

    const allData = useSelector(state => state.allStudents);
    const studentData = useSelector(state => state.currentStudent);
    const visual = useSelector(state => state.visual);

    return (
        <section>
            <VictoryBar />
        </section>
    )
}