const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    ROLLNO: String,
    NAME: String,
    FACULTY: String,
    SUBJECT1: String,
    MARK1: String,
    SUBJECT2: String,
    MARK2: String,
    SUBJECT3: String,
    MARK3: String,
    SUBJECT4: String,
    MARK4: String,
    SUBJECT5: String,
    MARK5: String,
    SUBJECT6: String,
    MARK6: String,
    SUBJECT7: String,
    MARK7: String,
    SUBJECT8: String,
    MARK8: String,
    TOTAL: String,
    PERCENTAGE: String,
    REMARK: String,
});

const examresult2022 = mongoose.model('examresult2022', studentSchema);

module.exports = examresult2022;