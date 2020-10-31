
var startBtn = document.querySelector('#start');
var score = 0;
var time = document.querySelector('countdown');


function takeQuiz() {
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
    
    alert('you got ' + score + '/' + questions.length);
}

function countdown (){

    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            time.textContent = timeLeft;
        } else if (timeLeft === 0) {
            time.textContent = 'you ran out of time!';
            timeLeft--;
        }

    },1000);

}

startBtn.addEventListener('click', function(event) {
    takeQuiz();
});

startBtn.onclick = countdown; 