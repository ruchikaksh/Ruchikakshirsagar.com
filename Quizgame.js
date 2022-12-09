var readLineSync = require('readline-sync');
//var userName = readLineSync.question('HAve you got answer :');
var score = 0;
function play(question, answer) {
  var userName = readLineSync.question(question);
  if (userName.toUpperCase() == answer.toUpperCase()) {
    score++;
    console.log("Yay you are right");

  } else {

    console.log("Oops,you are wrong");
  }
  console.log("current score: ", score);
  console.log("-------------")

}
function Welcome() {
  var user = readLineSync.question("What's your name: ");
  console.log("Hi " + user);
  var c = readLineSync.question("Would you like to start the game: ")
  if (c.toUpperCase() == "YES") {
    game();
    showScores();
  }
  else {
    end();
  }
}
function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentque = questions[i];
    play(currentque.question, currentque.answer);
  }
}
var questions = [{
  question: "Where do I live?",
  answer: "Pune"
}, {
  question: "My favorite Band?",
  answer: "BTS"
},
{
  question: "Where Do I work?",
  answer: "TCS"
}];

function showScores() {
  console.log("YAY! You SCORED: ", score);
}
function end() {
  console.log("You can play next time!");
}
Welcome();
//game();
//showScores();