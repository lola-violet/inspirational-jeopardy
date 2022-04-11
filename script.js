var answerText = "";
var questionText = document.getElementById("question1");
var modal = document.getElementById("modal1")
var submitBtn = document.getElementById("submit")
var questionContainer = document.getElementById("questions")
var playAgainBtn = document.getElementById("return")
var resultPage = document.getElementById("resultpage")
var questionCount = 0;
var parametersContainer = document.getElementById("parameters")
var userAnswer = document.getElementById("textarea1")

function getJservice() {
  var requestUrl = "http://jservice.io/api/random";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      questionText.textContent = data[0].question;
      answerText = data[0].answer;

      console.log(answerText)
      questionCount++;
      if (questionCount > 5){
        questionContainer.classList.add("hide");
        resultPage.classList.remove("hide");
      }
    });
}


function getQuote() {
  var requestUrl = "https://type.fit/api/quotes";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var randomNumber = Math.floor(Math.random() * 1643);

      const quoteText = document.createElement("h2");
      const authorText = document.createElement("h4");

      quoteText.textContent = data[randomNumber].text;
      authorText.textContent = data[randomNumber].author;

      document.body.appendChild(quoteText);
      document.body.appendChild(authorText);
    });
}

function showQuiz(){
  questionContainer.classList.remove("hide")
}

function hideParameters(){
  parametersContainer.classList.add("hide")
}

$("#start-quiz").on("click", function (){
  hideParameters();
  getJservice();
  showQuiz();
});


submitBtn.addEventListener("click", function(){
  if (userAnswer.value == answerText.toLowerCase()){
    getJservice()
  } else {
    // TODO: make the quote thing show up
  };
});


getQuote();

 //grabbing Modal as variable

 //when the answer is submitted, the modal opens

function modalAppear() {

//  modal.style.display = "block";
 }

