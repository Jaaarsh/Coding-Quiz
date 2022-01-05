function printHighscores() {
  // Get scores from localstorage
  let highscores = localStorage.getItem("highscores");
  //Get names from localstrorage
  let names = localStorage.getItem("names");

  
  // display on page

  const highScoreLists = document.getElementById("highscores");

  let listHighScores1 = document.createElement("li");
  listHighScores1.innerHTML = names + '-' + highscores
  highScoreLists.appendChild(listHighScores1);
}
function clearHighscores() {
  localStorage.removeItem("highscores");
  location.reload();
};
  
document.getElementById("clear").onclick = clearHighscores;
  
// run function when page loads
printHighscores();
