const LoadProjects = () => {
  const projlist = document.querySelector("#projlist");

  const data = [
    {
      title: "Grafisch design voor tijdschrift 'Balancé'",
      description:
        "Ik doe de vormgeving van het tijdschrift 'Balancé' van de dansvereniging 'Les Précieuses Ridicules'.",
      link: "https://www.hofdansen.nl/commissies",
    },
  ];

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
    pDescription.innerText = data.description;

    const mainLink = document.createElement("a");
    mainLink.classList.add("link");
    mainLink.href = data.link;
    mainLink.target = "_blank";
    mainLink.innerText = "Bekijk project";

    col10Div.appendChild(spanTitle);
    col10Div.appendChild(pDescription);
    col10Div.appendChild(mainLink);

    experienceDiv.appendChild(col10Div);

    li.appendChild(experienceDiv);

    projlist.appendChild(li);
  };

  data.forEach((item) => {
    createCard({
      title: item.title,
      description: item.description,
      link: item.link,
    });
  });
};

LoadProjects();
