let score = 0;
let i = 1;
let timeLeft = 15;
let startBtn = document.querySelector("#start");

startBtn.addEventListener("click", quest1);
startBtn.addEventListener("click",countdown);


//Function to remove the initial start button after it is first pressed.
function removeStartBtn() {
    var elem = document.getElementById('start');
    elem.parentNode.removeChild(elem);
    return false;
}

//Questions in function to be put on page
function quest1() {
    event.preventDefault()

    let question= "Commonly used data types DO NOT include: ";
    let ans1= "strings";
    let ans2= "booleans";
    let ans3= "alerts";
    let ans4= "numbers";
    //rightAns= ans3;

    //Assign the answers to the hidden buttons in HTML
    document.getElementById("qR").innerHTML = question;
    document.getElementById("ans1").innerHTML = ans1;
    document.getElementById("ans2").innerHTML = ans2;
    document.getElementById("ans3").innerHTML = ans3;
    document.getElementById("ans4").innerHTML = ans4;
    
    //Hide the "#aR" string from HTML for when test begins
    document.getElementById("aR").hidden = true;
    //Unhide hidden buttons for answers
    document.getElementById("ans1").hidden = false;
    document.getElementById("ans2").hidden = false;
    document.getElementById("ans3").hidden = false;
    document.getElementById("ans4").hidden = false;

    document.getElementById("ans3").onclick = function correct(){
        score = i++;
        console.log("correct");
        console.log(score);
        addEventListener("click", quest2);
        localStorage.setItem("highScore", score);
    };

    document.getElementById("ans1").onclick = function incorrect(){
        timeLeft = timeLeft - 5;
        console.log("incorrect");
        addEventListener("click", quest2);
    };

    document.getElementById("ans2").onclick = function incorrect(){
        timeLeft = timeLeft - 5;
        console.log("incorrect");
        addEventListener("click", quest2);
    };

    document.getElementById("ans4").onclick = function incorrect(){
        timeLeft = timeLeft - 5;
        console.log("incorrect");
        addEventListener("click", quest2);
    };

};

function quest2() {
    event.preventDefault()
    
    let question= "The condition in an if/else statement is enclosed within _____.";
    let ans1= "quotes";
    let ans2= "curly brackets";
    let ans3= "parenthesis";
    let ans4= "square brackets";
    //rightAns= ans3;

    //Assign the answers to the hidden buttons in HTML
    document.getElementById("qR").innerHTML = question;
    document.getElementById("ans1").innerHTML = ans1;
    document.getElementById("ans2").innerHTML = ans2;
    document.getElementById("ans3").innerHTML = ans3;
    document.getElementById("ans4").innerHTML = ans4;

    document.getElementById("ans3").onclick = function correct(){
        score = i++;
        console.log("correct");
        console.log(score);
        addEventListener("click", quest3);
        localStorage.setItem("highScore", score);
    };

    document.getElementById("ans1").onclick = function incorrect(){
        timeLeft = timeLeft - 5;
        console.log("incorrect");
        addEventListener("click", quest3);
    };

    document.getElementById("ans2").onclick = function incorrect(){
        timeLeft = timeLeft - 5;
        console.log("incorrect");
        addEventListener("click", quest3);
    };

    document.getElementById("ans4").onclick = function incorrect(){
        timeLeft = timeLeft - 5;
        console.log("incorrect");
        addEventListener("click", quest3);
    };

};

function quest3() {
    event.preventDefault()
    
    let question= "Arrays in JavaScript can be used to store ____.";
    let ans1= "numbers and strings";
    let ans2= "other arrays";
    let ans3= "booleans";
    let ans4= "all of the above";
    //rightAns= "ans4";

    //Assign the answers to the hidden buttons in HTML
    document.getElementById("qR").innerHTML = question;
    document.getElementById("ans1").innerHTML = ans1;
    document.getElementById("ans2").innerHTML = ans2;
    document.getElementById("ans3").innerHTML = ans3;
    document.getElementById("ans4").innerHTML = ans4;

    document.getElementById("ans4").onclick = function correct(){
        score = i++;
        console.log("correct");
        console.log(score);
        addEventListener("click", quest4);
        localStorage.setItem("highScore", score);
    };

    document.getElementById("ans1").onclick = function incorrect(){
        timeLeft = timeLeft - 5;
        console.log("incorrect");
        addEventListener("click", quest4);
    };

    document.getElementById("ans2").onclick = function incorrect(){
        timeLeft = timeLeft - 5;
        console.log("incorrect");
        addEventListener("click", quest4);
    };

    document.getElementById("ans3").onclick = function incorrect(){
        timeLeft = timeLeft - 5;
        console.log("incorrect");
        addEventListener("click", quest4);
    };

};

function quest4() {
    event.preventDefault()
    
    let question= "String values must be enclosed within _____ when being assigned to variables.";
    let ans1= "commas";
    let ans2= "curly brackets";
    let ans3= "quotes";
    let ans4= "parentheses";
    //rightAns= "ans3";

    //Assign the answers to the hidden buttons in HTML
    document.getElementById("qR").innerHTML = question;
    document.getElementById("ans1").innerHTML = ans1;
    document.getElementById("ans2").innerHTML = ans2;
    document.getElementById("ans3").innerHTML = ans3;
    document.getElementById("ans4").innerHTML = ans4;

    document.getElementById("ans3").onclick = function correct(){
        score = i++;
        console.log("correct");
        console.log(score);
        addEventListener("click", quest5);
        localStorage.setItem("highScore", score);
    };

    document.getElementById("ans1").onclick = function incorrect(){
        timeLeft = timeLeft - 5;
        console.log("incorrect");
        addEventListener("click", quest5);
    };

    document.getElementById("ans2").onclick = function incorrect(){
        timeLeft = timeLeft - 5;
        console.log("incorrect");
        addEventListener("click", quest5);
    };

    document.getElementById("ans4").onclick = function incorrect(){
        timeLeft = timeLeft - 5;
        console.log("incorrect");
        addEventListener("click", quest5);
    };

};

function quest5() {
    event.preventDefault()
    
    let question= "A very useful tool used during development and debugging for printing content to th debugger is: ";
    let ans1= "JavaScript";
    let ans2= "terminal/bash";
    let ans3= "for loops";
    let ans4= "console.log";
    //rightAns= "ans4";

    //Assign the answers to the hidden buttons in HTML
    document.getElementById("qR").innerHTML = question;
    document.getElementById("ans1").innerHTML = ans1;
    document.getElementById("ans2").innerHTML = ans2;
    document.getElementById("ans3").innerHTML = ans3;
    document.getElementById("ans4").innerHTML = ans4;

    document.getElementById("ans4").onclick = function correct(){
        score = i++;
        console.log("correct");
        console.log(score);
        addEventListener("click", allDone);
        localStorage.setItem("highScore", score);
    };

    document.getElementById("ans1").onclick = function incorrect(){
        timeLeft = timeLeft - 5;
        console.log("incorrect");
        addEventListener("click", allDone);
    };

    document.getElementById("ans2").onclick = function incorrect(){
        timeLeft = timeLeft - 5;
        console.log("incorrect");
        addEventListener("click", allDone);
    };

    document.getElementById("ans3").onclick = function incorrect(){
        timeLeft = timeLeft - 5;
        console.log("incorrect");
        addEventListener("click", allDone);
    };

};

//Finish Page
function allDone() {
    window.location.replace("score.html");
};

//TIMER CODE
let timerEl = document.getElementById('countdown');
function countdown() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    
    var timer = setInterval(function() {
        console.log(timeLeft);
        document.getElementById("countdown").innerHTML = timeLeft;
        timeLeft--;
        if(timeLeft <= 0) {
        stopInterval()
        location.replace("score.html");
    }
}, 1000);

    var stopInterval = function() {
        console.log('time is up!');
        clearInterval(timer);
}
};

  