//GETTING ELEMENTS FROM HTML
const resultPage = document.getElementById('resultPage');
const resultForm = document.getElementById('resultForm');
const submitButton = document.getElementById('submitButton');
const candidateName = document.getElementById('candidateName');
const candidateRollno = document.getElementById('candidateRollNo');
const candidateFaculty = document.getElementById('facultyInfo');
const resultBox = document.getElementsByClassName('resultBox');

//STUDENT RESULT DATA DECLARATION
let studentResult = [];


//HIDING FORM AND SHOWING RESULT
resultForm.addEventListener('submit', (e) => {
    e.preventDefault()
    resultForm.classList.remove('Visibility'),
    resultPage.classList.add('Visibility')
})


//FILTERING RESULT DATA THROUGH FORM SEARCH
submitButton.addEventListener('click', () => {
    const searchName = candidateName.value.toUpperCase();
    const searchNumber = candidateRollno.value.toUpperCase();
    const searchFaculty = candidateFaculty.value.toUpperCase();
    const information = resultPage.innerHTML = "The Information You Have Filled Is Invalid <br> Refresh The Page And Try Again";
    console.log('Name:' + searchName + ',' + 'RollNo:' + searchNumber + ',' + 'Faculty:' + searchFaculty);
    const filteredNameList = studentResult.filter((result) => {
        const filteredName = result.NAME.toUpperCase().includes(searchName)
        return (
            filteredName
        )
    })
    const filteredNumberList = filteredNameList.filter((result) => {
        const filterNumber = result.ROLLNO.toUpperCase().startsWith(searchNumber)
        return (
            filterNumber
        )
    })
    const filteredFacultyList = filteredNumberList.filter((result) => {
        const filterFaculty = result.FACULTY.toUpperCase().startsWith(searchFaculty)
        return (
            filterFaculty
        )
    })
    if (filteredFacultyList.length == 1) {
        displayResult(filteredFacultyList)
    }
    else {
        displayResult(information)
    }
})


//FETCHING STUDENT DATABASE
const loadResult = async () => {
    try {
        // const res = await fetch("https://macjuniorresult.herokuapp.com/ResultSheetAPI")
        const res = await fetch('/ResultSheetAPI');
        studentResult = await res.json();
        displayResult(studentResult);
    } catch (err) {
        console.log(err);
    }
};

const displayResult = (result) => {
    const htmlString = result
        .map((result) => {
            return `
            <div>
                <h4>Maulana Azad College of Arts, Science & Commerce </h4><br>
                <p>Name      : ${result.NAME} </p>
                <p>Roll No   :  ${result.ROLLNO} </p>
                <p>FACULTY   : XI - ${result.FACULTY} </p>
                <p>Total     :  ${result.TOTAL} </p>
                <p>Percentage:  ${result.PERCENTAGE} </p>
                <p>Remark    :  ${result.REMARK} </p>
            </div>
            <br>
            <table>
            <tr>
                <th>Sr No</th>
                <th>Subject</th>
                <th>Marks</th>
            </tr>
            <tr>
                <td>1</td>
                <td>${result.SUBJECT1}</td>
                <td>${result.MARK1}</td>
            </tr>
            <tr>
                <td>2</td>
                <td>${result.SUBJECT2}</td>
                <td>${result.MARK2}</td>
            </tr>
            <tr>
                <td>3</td>
                <td>${result.SUBJECT3}</td>
                <td>${result.MARK3}</td>
            </tr>
            <tr>
                <td>4</td>
                <td>${result.SUBJECT4}</td>
                <td>${result.MARK4}</td>
            </tr>
            <tr>
                <td>5</td>
                <td>${result.SUBJECT5}</td>
                <td>${result.MARK5}</td>
            </tr>
            <tr>
                <td>6</td>
                <td>${result.SUBJECT6}</td>
                <td>${result.MARK6}</td>
            </tr>
            <tr>
                <td>7</td>
                <td>${result.SUBJECT7}</td>
                <td>${result.MARK7}</td>
            </tr> 
            <tr>
                <td>8</td>
                <td>${result.SUBJECT8}</td>
                <td>${result.MARK8}</td>
            </tr>  
          </table>
          <br>
            `;
        })
        .join('');
    resultPage.innerHTML = htmlString;
    //fhghgfh

};

loadResult();