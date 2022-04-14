var quoteText = document.getElementById("myQuote");
var authorText = document.getElementById("quoteAuthor");
var answerText = "";
var questionText = document.getElementById("question1");
var modal = document.getElementById("modal1");
var submitBtn = document.getElementById("submit");
var questionContainer = document.getElementById("questions");
var playAgainBtn = document.getElementById("return");
var resultPage = document.getElementById("resultpage");
var parametersContainer = document.getElementById("parameters");
var userAnswer = document.getElementById("textarea1");
var categoryRow = document.getElementById("category-labels");
var questionGrid = document.getElementById('question-grid')
var potpourriiii = 306;
var stupidAnswers = 136;
var americanHistory = 780;
var animals = 21;
var threeLetterWords = 105;
var people = 442;
var category;
var value;
var score = 0;


// TODO: EVERYTHING RELATING TO PARAMETERS
// TODO: generate 5 questions for each category
// TODO: link boxes to the questions
// TODO: WHEN question answered clear text in the box

// function to pull a question and put it on the screen
$(".question-row")
  .children()
  .on("click", function (event) {
    value = $(this).parent().attr("data-value");
    if ($(this).hasClass("animals")) {
      category = animals;
      $(this).removeClass("animals");
      $(this).children().addClass("answered");
    } else if ($(this).hasClass("potpourriiii")) {
      category = potpourriiii;
      $(this).removeClass("potpourriiii");
      $(this).children().addClass("answered");
    } else if ($(this).hasClass("americanHistory")) {
      category = americanHistory;
      $(this).removeClass("americanHistory");
      $(this).children().addClass("answered");
    } else if ($(this).hasClass("threeLetterWords")) {
      category = threeLetterWords;
      $(this).removeClass("threeLetterWords");
      $(this).children().addClass("answered");
    } else if ($(this).hasClass("people")) {
      category = people;
      $(this).removeClass("people");
      $(this).children().addClass("answered");
    } else if ($(this).hasClass("stupidAnswers")) {
      category = stupidAnswers;
      $(this).removeClass("stupidAnswers");
      $(this).children().addClass("answered");
    } else {
      return;
    }
    getJservice();
  });

function getJservice() {
  var requestUrl =
    "https://jservice.io/api/clues?category=" + category + "&value=" + value;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (!data.invalid_count){
        randomQuestionNumber = Math.floor(Math.random() * data.length)
        questionText.textContent = data[randomQuestionNumber].question;
        var answerTemp = removeTags(data[randomQuestionNumber].answer);
        answerText = answerTemp.replace(/&/, "and");
        console.log(answerText);
        showQuiz();
        hideGrid();
      } else {
        console.log("invalid question rerolling")
        getJservice();
      }
    });
}

// function to pull quotes
function getQuote() {
  var requestUrl = "https://type.fit/api/quotes";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var randomNumber = Math.floor(Math.random() * 1643);
      // set this to show up in the quote block between questions
      console.log(data[randomNumber].text);
      quoteText.textContent = data[randomNumber].text;
      authorText.textContent = data[randomNumber].author;
      showQuote();
      hideQuiz();
    });
}

// function that hides the parameters
function hideParameters() {
  parametersContainer.classList.add("hide");
}

// function that runs the quiz for the first question
$("#start-quiz").on("click", function () {
  hideParameters();
  showGrid();
});

// function for dealing with questions as they get answered
submitBtn.addEventListener("click", function () {
  if (userAnswer.value.toLowerCase() == answerText.toLowerCase()) {
    value = parseInt(value);
    score = score + value;
    console.log(score);
    M.toast({ html: "Correct!!", classes: "rounded" });
    userAnswer.value = "";
    showGrid();
    hideQuiz();
  } else {
    // make the quote thing show up
    M.toast({ html: "Incorrect :(", classes: "rounded" });
    hideQuiz();
    userAnswer.value = "";
    getQuote();
    showQuote();
  } console.log($(".question-row").children());
  var questionBox = $(".question-row").children();
  // The below for loop is intended to have the game stop after each questionBox has class of answered. Doesn't work yet.
  for(i=0;i < questionBox.length; i++){
    if (!questionBox[i].classList.contains("answered")) {
      console.log("see");
    } else {
      console.log("test");
      scorePage();
    }
  }
});

$("#moreQuotes").on("click", function(){
  getQuote();
})

$("#nextQuestion").on("click", function(){
  hideQuote();
  showGrid();
})

function wrongAnswer() {
  getQuote();
}

// function that shows the quote
function showQuote() {
  quoteContainer.classList.remove("hide");
}

// function that hides shows the quote
function hideQuote() {
  quoteContainer.classList.add("hide");
}

// function that hides shows the quiz
function showQuiz() {
  questionContainer.classList.remove("hide");
}

// function that hides shows the quiz
function showGrid() {
  questionGrid.classList.remove("hide");
}

// function that hides shows the quiz
function hideGrid() {
  questionGrid.classList.add("hide");
}

// function that hides the quiz
function hideQuiz() {
  questionContainer.classList.add("hide");
}

function removeTags(str) {
  if (str === null || str === "") return false;
  else str = str.toString();

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return str.replace(/(<([^>]+)>)/gi, "");
}

$(".dropdown-trigger").dropdown();

// changes category 1 heading when an option is selected
$("#category1")
  .children()
  .on("click", function (event) {
    var placeholder = event.currentTarget.textContent;
    console.log(placeholder);
    $("#category-display-1").children().text(event.currentTarget.textContent);
    if (placeholder == "American History") {
      $(".category-1").each(function () {
        $(this).addClass("americanHistory");
      });
    } else if (placeholder == "Potpourriiii") {
      $(".category-1").each(function () {
        $(this).addClass("potpourriiii");
      });
    } else if (placeholder == "Stupid Answers") {
      $(".category-1").each(function () {
        $(this).addClass("stupidAnswers");
      });
    } else if (placeholder == "Animals") {
      $(".category-1").each(function () {
        $(this).addClass("animals");
      });
    } else if (placeholder == "Three Letter Words") {
      $(".category-1").each(function () {
        $(this).addClass("threeLetterWords");
      });
    } else {
      $(".category-1").each(function () {
        $(this).addClass("people");
      });
    }
  });

// changes category 2 heading when an option is selected
$("#category2")
  .children()
  .on("click", function (event) {
    var placeholder = event.currentTarget.textContent;
    console.log(placeholder);
    $("#category-display-2").children().text(event.currentTarget.textContent);
    if (placeholder == "American History") {
      $(".category-2").each(function () {
        $(this).addClass("americanHistory");
      });
    } else if (placeholder == "Potpourriiii") {
      $(".category-2").each(function () {
        $(this).addClass("potpourriiii");
      });
    } else if (placeholder == "Stupid Answers") {
      $(".category-2").each(function () {
        $(this).addClass("stupidAnswers");
      });
    } else if (placeholder == "Animals") {
      $(".category-2").each(function () {
        $(this).addClass("animals");
      });
    } else if (placeholder == "Three Letter Words") {
      $(".category-2").each(function () {
        $(this).addClass("threeLetterWords");
      });
    } else {
      $(".category-2").each(function () {
        $(this).addClass("people");
      });
    }
  });
// changes category 3 heading when an option is selected
$("#category3")
  .children()
  .on("click", function (event) {
    var placeholder = event.currentTarget.textContent;
    console.log(placeholder);
    $("#category-display-3").children().text(event.currentTarget.textContent);
    if (placeholder == "American History") {
      $(".category-3").each(function () {
        $(this).addClass("americanHistory");
      });
    } else if (placeholder == "Potpourriiii") {
      $(".category-3").each(function () {
        $(this).addClass("potpourriiii");
      });
    } else if (placeholder == "Stupid Answers") {
      $(".category-3").each(function () {
        $(this).addClass("stupidAnswers");
      });
    } else if (placeholder == "Animals") {
      $(".category-3").each(function () {
        $(this).addClass("animals");
      });
    } else if (placeholder == "Three Letter Words") {
      $(".category-3").each(function () {
        $(this).addClass("threeLetterWords");
      });
    } else {
      $(".category-3").each(function () {
        $(this).addClass("people");
      });
    }
  });

  function scorePage () {
    $("#finalize").textContent = "Final Score is" + score + "!";
<<<<<<< HEAD
  }
=======

  }
>>>>>>> dev
