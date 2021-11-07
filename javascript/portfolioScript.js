

fetch("https://eldaraharonson.github.io/Bootstrap-Portfolio/json/pageData.json")
        .then((response) => response.json())
        .then((data) => {
          let titles = document.getElementsByClassName("project-title");
          let overviews = document.getElementsByClassName("overview");
          let devInfos = document.getElementsByClassName("dev-info");
          let pictures = document.getElementsByClassName("project-pic");
          let githubLinks = document.getElementsByClassName("github-link");
          let projects = data.projects;

          for (let i = 0; i < titles.length; i++) {
            titles[i].innerHTML = projects[i].title;
            overviews[i].innerHTML = projects[i].overview;
            devInfos[i].innerHTML = projects[i].devInfo;
            pictures[i].src = projects[i].pictureURL;
            githubLinks[i].href = projects[i].githubLink;
          }
        });
      window.addEventListener("resize", adjustTextOnResize);
      let projectContentText = document.querySelectorAll(
        ".col-8, .col-fluid-8"
      );
      if (window.innerWidth < 768) {
        for (let i = 0; i < projectContentText.length; i++) {
          projectContentText[i].className = "col-fluid-8";
        }
      }

      function adjustTextOnResize() {
        if (window.innerWidth < 768) {
          for (let i = 0; i < projectContentText.length; i++) {
            projectContentText[i].className = "col-fluid-8";
          }
        } else {
          for (let i = 0; i < projectContentText.length; i++) {
            projectContentText[i].className = "col-8";
          }
        }
      }