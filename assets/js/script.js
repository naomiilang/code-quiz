
var startBtn = document.querySelector('#start');
var score = 0;
var timeEl = document.getElementById('time');
var userScore = document.getElementById('user-score');
var pastScore = document.getElementById('past-scores');

function countdown () {
var counter = 21;

//timer 
var interval = setInterval(function () {
    counter--;
    // timeEl.textContent = [counter];
    console.log(counter);
    timeEl.textContent = counter;
    if ( counter === 0){ 
    clearInterval(interval);
    }
},1000);
}

// show old scores
function showScores () {
    var oldScore = localStorage.getItem('score');
    var oldInitials = localStorage.getItem('initials');
    if(score===null || oldInitials===null){
        return;
    }
    
    pastScore.textContent = oldInitials + ':' + oldScore;
}

showScores();

function takeQuiz() {

    var userInitials = window.prompt('type your initials!');
    console.log(userInitials);

    var questions = [
        {q: 'the DOM is built into the javaScript language', a: false},
        {q: 'an alert is a type of data', a: false},
        {q: 'window.promt gives the user a space to type an answer', a: true},
        {q:'alert === window.alert', a: true}
    ]
    
    for (var i = 0; i<questions.length; i++) {
    var answer = confirm(questions[i].q);

    if (
        (answer === true && questions[i].a === true) ||
        (answer === false && questions[i].a === false)
    ) {
        score++;

        alert('correct!');
    } else {
        score--;
        alert('wrong!');
    }
    }

    // alert('you got ' + score + '/' + questions.length);

    userScore.textContent = score + '/' + questions.length;
    localStorage.setItem('score', score);
    localStorage.setItem('initials', userInitials);
    showScores();
}

    startBtn.addEventListener('click', function(event) {
        takeQuiz(); countdown();
    });

    // startBtn.onclick = countdown;
