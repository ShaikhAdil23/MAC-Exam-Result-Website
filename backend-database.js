// BACKEND
const express = require('express');
const path = require('path');
const route = express();
const port = process.env.PORT || 5050;

// RESULT DATABASE
const xlsx = require('xlsx');

let resultSheet = xlsx.readFile('XI Result 2022.xlsx');
let sheet = resultSheet.Sheets["Sheet1"];

let jsonSheet = xlsx.utils.sheet_to_json(sheet);

// PAGINATION
route.use(express.static(path.join(__dirname, '/')))

route.get('/',(req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'HTML/result.html'))
});

route.get('/ResultSheetAPI',(req, res) => {
    res.status(200).send(jsonSheet)
})

// HOSTING
route.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})




