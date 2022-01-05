saveBtn = document.getElementById("saveScore");

document.getElementById("highscore").innerHTML = localStorage.getItem("highScore");



function saveScore() {
    event.preventDefault();
  
    // Get saved scores from localstorage
      let highscores = localStorage.getItem("highScore");
      
      localStorage.setItem("highscores", highscores);
      localStorage.setItem("names", document.getElementById("nameId").value);

      // redirect to next page
      location.href = "leaderboard.html";    
  };
saveBtn.onclick = saveScore;