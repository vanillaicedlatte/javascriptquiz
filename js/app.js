function populate() {
  if(quiz.isEnded()) {
      showScores();
  }
  else {
    //show question
    var element = document.getElementById("questions");
    element.innerHTML = quiz.getQuestionIndex().text;

    //show choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i< choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i])
    }

    showProgress();

  }
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  }
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}


function showScores() {
  var gameOverHtml = "<h1>Results</h1>";
  gameOverHtml += "<h2 id='score'> Your results: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

var questions = [
  new Question("What year was Marie Antoinette born?", ["1755", "1492", "1793", "1892"], "1755"),
  new Question("Who was Marie Antoinette's husband?", ["King Arthur", "Henry VIII", "Louis XVI", "Jason Schwartzman"], "Louis XVI"),
  new Question("What was the name of Marie Antoinette's estate?", ["Versailles", "The Eiffel Tower", "Chateau Marmont", "Petit Trianon"], "Petit Trianon")

];

var quiz = new Quiz(questions);

populate();
