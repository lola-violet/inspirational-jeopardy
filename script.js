function getJservice() {
    var requestUrl = "http://jservice.io/api/random";
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data[0].question);
        console.log("===================");
        console.log(data[0].answer);
      });
  }
  
  
  
  function getQuote() {
    var requestUrl = "https://type.fit/api/quotes";
    fetch(requestUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var randomNumber = Math.floor(Math.random()*1643)
      console.log(data[randomNumber].text);
      console.log("===================");
      console.log(data[randomNumber].author);
    });
  }
  
  
  getJservice();
  getQuote();