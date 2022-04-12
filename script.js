var quoteText = document.getElementById("myQuote");
var authorText = document.getElementById("quoteAuthor");
var answerText = "";
var questionText = document.getElementById("question1");
var modal = document.getElementById("modal1")
var submitBtn = document.getElementById("submit")
var questionContainer = document.getElementById("questions")
var playAgainBtn = document.getElementById("return")
var resultPage = document.getElementById("resultpage")
var parametersContainer = document.getElementById("parameters")
var userAnswer = document.getElementById("textarea1")
var questionCount = 0;
var score = 0;


// TODO: EVERYTHING RELATING TO PARAMETERS
// TODO: generate 5 questions for each catagory
// TODO: link boxes to the questions
// TODO: WHEN question answered clear text in the box


// function to pull a question and put it on the screen
function getJservice() {
  var requestUrl = "http://jservice.io/api/random";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      questionText.textContent = data[0].question;
      var answerTemp =  removeTags(data[0].answer);
      answerText = answerTemp.replace(/&/, "and")

      console.log(answerText)
      questionCount++;
      if (questionCount >= 5){
        hideQuiz();
        resultPage.classList.remove("hide");
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
      console.log(data[randomNumber].text)
      quoteText.textContent = data[randomNumber].text;
      authorText.textContent = data[randomNumber].author;
    });
}


// function that hides the parameters
function hideParameters(){
  parametersContainer.classList.add("hide")
}

// function that runs the quiz for the first question
$("#start-quiz").on("click", function (){
  hideParameters();
  getJservice();
  showQuiz();
});

// function for dealing with questions as they get answered
submitBtn.addEventListener("click", function(){
  if (userAnswer.value == answerText.toLowerCase()){
    M.toast({html: 'Correct!!', classes: 'rounded'})
    getJservice()
  } else {
    // make the quote thing show up
    M.toast({html: 'Incorrect :(', classes: 'rounded'})
    hideQuiz();
    getQuote();
    showQuote();
  };
});

function wrongAnswer(){
  getQuote();
}



// function that shows the quote
function showQuote(){
  quoteContainer.classList.remove("hide");
}

// function that hides shows the quote
function hideQuote(){
  quoteContainer.classList.add("hide");
}

// function that hides shows the quiz
function showQuiz(){
  questionContainer.classList.remove("hide");
}

// function that hides the quiz
function hideQuiz(){
  questionContainer.classList.add("hide");
}

function removeTags(str) {
  if ((str===null) || (str===''))
      return false;
  else
      str = str.toString();
        
  // Regular expression to identify HTML tags in 
  // the input string. Replacing the identified 
  // HTML tag with a null string.
  return str.replace( /(<([^>]+)>)/ig, '');
}

$('.dropdown-trigger').dropdown();
