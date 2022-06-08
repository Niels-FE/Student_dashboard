const csvFile = './winc_data.csv';
const fs = require('fs');
const csv = require('csvtojson');

csv()
    .fromFile(csvFile)
    .then((jsonObj) => {
        const dataModel = {
            dataModel: jsonObj,
        }

        fs.writeFile('./data_output.js', JSON.stringify(dataModel), (err) => {
            if (err) {
                return console.error(err);
            }
        });
    })
