const LoadProject = () => {
  const projectURL =
    "https://0v4j861z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'project'%5D";

  const projlist = document.querySelector("#projlist");

  fetch(projectURL)
    .then((response) => response.json())
    .then((data) => {
      data.result.forEach((item) => {
        createCard({
          title: item.title,
          description: item.description,
          description_nl: item.description_nl,
          link: item.link,
          repo: item.repo,
        });
      });
    });

  const createCard = (data) => {
    const li = document.createElement("li");
    const experienceDiv = document.createElement("div");
    experienceDiv.classList.add("experience");

    const col10Div = document.createElement("div");
    col10Div.classList.add("col-10");

    const spanTitle = document.createElement("span");
    spanTitle.classList.add("title");
    spanTitle.innerText = data.title;

    const pDescription = document.createElement("p");
    pDescription.classList.add("description");
    if (localStorage.getItem("lang") == "nl") {
      pDescription.innerText = data.description_nl;
    } else {
      pDescription.innerText = data.description;
    }

    const mainLink = document.createElement("a");
    mainLink.classList.add("link");
    mainLink.href = data.link;
    mainLink.target = "_blank";
    if (localStorage.getItem("lang") == "nl") {
      mainLink.innerText = "Bekijk project";
    } else {
      mainLink.innerText = "View project";
    }

    let repoLink = null;
    if (data.repo != null) {
      repoLink = document.createElement("a");
      repoLink.classList.add("link");
      repoLink.classList.add("repo");

      repoLink.href = data.repo;
      repoLink.target = "_blank";
      if (localStorage.getItem("lang") == "nl") {
        repoLink.innerText = "Bekijk code";
      } else {
        repoLink.innerText = "View code";
      }
    }

    col10Div.appendChild(spanTitle);
    col10Div.appendChild(pDescription);
    col10Div.appendChild(mainLink);

    if (data.repo != null) {
      col10Div.appendChild(repoLink);
    }

    experienceDiv.appendChild(col10Div);

    li.appendChild(experienceDiv);

    projlist.appendChild(li);
  };
};

LoadProject();
