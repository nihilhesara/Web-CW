var questionNumber = 1;

function openPrompt() {
    document.getElementById('customPrompt').style.display = 'block';
}

function closePrompt() {
    document.getElementById('customPrompt').style.display = 'none';
}

// Function to update the progress bar
function updateProgressBar() {
    var progress = (questionNumber * 100) / 16; // Calculate the progress to show the progress
    document.getElementById('progress').style.width = progress + '%';
}

function nextQuestion() {
    if (questionNumber % 4 === 0) {
        document.getElementById('section' + (questionNumber / 4)).style.display = 'none';
        document.getElementById('section' + ((questionNumber / 4) + 1)).style.display = 'block';
    }
    document.getElementById('question' + questionNumber).style.display = 'none';
    questionNumber++;
    document.getElementById('question' + questionNumber).style.display = 'block';
    updateProgressBar(); // Update the progress bar 
}

function skipSection() {
    var sectionNumber = Math.ceil(questionNumber / 4);
    var nextQuestion;
    if (sectionNumber < 4) {
        nextQuestion = sectionNumber * 4 + 1;
    } else {
        nextQuestion = 14; 
    }
    document.getElementById('section' + sectionNumber).style.display = 'none';
    document.getElementById('section' + (sectionNumber + 1)).style.display = 'block';
    questionNumber = nextQuestion;
    document.getElementById('question' + questionNumber).style.display = 'block';
    updateProgressBar(); // Update the progress bar 
}

function submitDetails() {
    // Getting user inputs
    var name = document.getElementById('nameInput').value;
    var surname = document.getElementById('surnameInput').value;
    var age = document.getElementById('ageInput').value;
    var gender = document.getElementById('genderInput').value;
    var address = document.getElementById('addressInput').value;
    var task = document.getElementById('taskInput').value;
    var place = document.getElementById('placeInput').value;
    var studyArea = document.getElementById('studyAreaInput').value;
    var degree = document.getElementById('degreeInput').value;
    var uni = document.getElementById('uniInput').value;
    var cyear = document.getElementById('cyearInput').value; 
    var minHours = document.getElementById('minHoursInput').value;
    var tel = document.getElementById('telInput').value;
    var surname2 = document.getElementById('surname2Input').value;
    var email = document.getElementById('emailInput').value;

    // Write collected information to the document
    document.writeln("<h2>User Profile Information:</h2>");
    document.writeln("<p>Name: " + name + "</p>");
    document.writeln("<p>Surname: " + surname + "</p>");
    document.writeln("<p>Age: " + age + "</p>");
    document.writeln("<p>Gender: " + gender + "</p>");
    document.writeln("<p>Address: " + address + "</p>");
    document.writeln("<p>Task: " + task + "</p>");
    document.writeln("<p>Place: " + place + "</p>");
    document.writeln("<p>Study Area: " + studyArea + "</p>");
    document.writeln("<p>Degree: " + degree + "</p>");
    document.writeln("<p>University: " + uni + "</p>");
    document.writeln("<p>Completion Year: " + cyear + "</p>");
    document.writeln("<p>Minimum Hours: " + minHours + "</p>");
    document.writeln("<p>Telephone: " + tel + "</p>");
    document.writeln("<p>Surname: " + surname2 + "</p>")
    document.writeln("<p>Email: " + email + "</p>");

    closePrompt();
}