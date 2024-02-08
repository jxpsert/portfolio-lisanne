const LoadExperience = () => {
  const worklist = document.querySelector("#worklist");

  const data = [
    {
      title: "Crewtrainer",
      company: "McDonald's Nijmegen Novium",
      startDate: "2023-03-01",
      endDate: null,
      description:
        "Als Crewtrainer zorg ik ervoor dat nieuwe medewerkers wegwijs worden gemaakt binnen McDonald's. Ik geef trainingen volgens het Crew Development Program en werk daarnaast mee op de vloer. Ook ondersteun ik bestaande medewerkers in het ontwikkelen van hun vaardigheden.",
    },
    {
      title: "Crewlid",
      company: "McDonald's Nijmegen Novium",
      startDate: "2018-10-31",
      endDate: "2023-03-01",
      description:
        "Als Crewlid was ik verantwoordelijk voor het bereiden van producten, het opnemen van bestellingen en het schoonhouden van de werkplek.",
    },
  ];

  const createCard = (data) => {
    const li = document.createElement("li");
    const experienceDiv = document.createElement("div");
    experienceDiv.classList.add("experience", "work");

    if (data.endDate) {
      experienceDiv.classList.add("past");
    }

    const col10Div = document.createElement("div");
    col10Div.classList.add("col-10");

    const spanTitle = document.createElement("span");
    spanTitle.classList.add("title");
    spanTitle.innerText = data.title;

    const spanCompany = document.createElement("span");
    spanCompany.classList.add("company");
    spanCompany.innerHTML = `<i class="bi bi-briefcase-fill"></i>&nbsp;${data.company}`;

    const spanDuration = document.createElement("span");
    spanDuration.classList.add("duration");

    if (data.endDate == null) {
      endDate = "heden";
    } else {
      endDate = endDate = data.endDate.substring(0, data.endDate.length - 3);
    }

    const startDate = data.startDate.substring(0, data.startDate.length - 3);

    spanDuration.innerHTML = `<i class="bi bi-clock-fill"></i>&nbsp;${startDate} - ${endDate}`;

    const pDescription = document.createElement("p");
    pDescription.classList.add("description");
    pDescription.innerText = data.description;

    col10Div.appendChild(spanTitle);
    col10Div.appendChild(spanCompany);
    col10Div.appendChild(spanDuration);
    col10Div.appendChild(pDescription);

    let colDiv = null;
    if (data.skills != null && data.skills.length > 0) {
      colDiv = document.createElement("div");
      colDiv.classList.add("col");

      const spanSkills = document.createElement("span");
      spanSkills.classList.add("skills");
      spanSkills.innerText = "Skills";

      const ulSkills = document.createElement("ul");

      data.skills.forEach((skill) => {
        const liSkill = document.createElement("li");
        liSkill.innerText = skill;
        ulSkills.appendChild(liSkill);
      });

      colDiv.appendChild(spanSkills);
      colDiv.appendChild(ulSkills);
    }

    experienceDiv.appendChild(col10Div);

    if (data.skills != null && data.skills.length > 0) {
      experienceDiv.appendChild(colDiv);
    }

    li.appendChild(experienceDiv);

    worklist.appendChild(li);
  };

  data.forEach((item) => {
    createCard({
      title: item.title,
      company: item.company,
      startDate: item.startDate,
      endDate: item.endDate,
      description: item.description,
      skills: item.skills,
    });
  });
};

LoadExperience();
