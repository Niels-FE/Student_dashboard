const dataModel = require("../data/data_output.js");
const fs = require('fs');

const startingData = {
    averageData: [],
    personData: dataModel,
}

const writeData = () => {

    const allProjects = [];

    const calculateAverage = (numbers) => {
        let total = 0;
        const count = numbers.length;
        numbers.forEach(number => total = total + number);
        return (total / count)
    }

    for (const [key, value] of Object.entries(dataModel)) {
        if (!allProjects.includes(value.Project)) {
            allProjects.push(value.Project);
        }
    }

    allProjects.forEach(project => {
        const allNumbersDifficult = [];
        const allNumbersFun = [];
        dataModel.filter(data => {
            if (data.Project === project) {
                allNumbersDifficult.push(Number(data.Difficulty));
                allNumbersFun.push(Number(data.Funfactor));
            }
        })
        startingData.averageData.push({ project: project, averageDifficulty: calculateAverage(allNumbersDifficult), averageFunfactor: calculateAverage(allNumbersFun) })

    })

}

writeData();

startingData.averageData = JSON.stringify(startingData.averageData);

fs.writeFileSync('./startReducer.js', JSON.stringify(startingData, null, 2), (err) => {
    if (err) {
        return console.error(err);
    }
});




