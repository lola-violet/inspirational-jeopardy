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


// TODO: EVERYTHING RELATING TO PARAMETERS

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
      if (questionCount > 5){
        questionContainer.classList.add("hide");
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
// TODO: set this to show up in the quote block between questions
      const quoteText = document.createElement("h2");
      const authorText = document.createElement("h4");

      quoteText.textContent = data[randomNumber].text;
      authorText.textContent = data[randomNumber].author;

      document.body.appendChild(quoteText);
      document.body.appendChild(authorText);
    });
}

// function that hides shows the quiz
function showQuiz(){
  questionContainer.classList.remove("hide")
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
    getJservice()
  } else {
    // TODO: make the quote thing show up
  };
});

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


getQuote();
