// CREATING VARIABLES
const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const app = express();
const port = process.env.PORT || 5057;

const Student = require('./student')

// RESULT DATABASE
mongoose.connect("mongodb://localhost:27017/macdatabase", 
{ useNewUrlParser: true, useUnifiedTopology: true });

// PAGINATION
app.use(express.static(path.join(__dirname, '/')))

app.get('/',(req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'HTML/result.html'))
});

app.get("/ResultSheetAPI", async (req, res) => {
    const studentsData = await Student.find();
    res.send(studentsData);
})

// HOSTING
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})




