


// fetch("../json/pageData.json")
//         .then((response) => response.json())
//         .then((data) => {
//           document.getElementById("intro-text").innerHTML = data.introText;
//         });

// var data = JSON.parse(introText);
// document.getElementById("intro-text").innerHTML = data;

var request = new XMLHttpRequest();
request.open("GET","https://eldaraharonson.github.io/Bootstrap-Portfolio/json/pageData.json", false);
request.send(null);
var my_JSON_object = JSON.parse(request.responseText);
document.getElementById("intro-text").innerHTML = my_JSON_object.introText;
  
