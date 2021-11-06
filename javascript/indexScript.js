
fetch("/json/pageData.json")
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("intro-text").innerHTML = data.introText;
        });