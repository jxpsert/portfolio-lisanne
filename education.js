const LoadEducation = () => {
  const edulist = document.querySelector("#edulist");

  const data = [
    {
      title: "Legal Insurance & HR services Specialist",
      company: "ROC Nijmegen",
      startDate: "2023-08-01",
      endDate: null,
      description:
        "Op de opleiding Legal, Insurance & HR services Specialist van ROC Nijmegen leer ik alles over werken in een juridische omgeving, verzekeringen of een HR-omgeving.",
      eqf: 4,
      degree: false,
    },
    {
      title: "Literatuurwetenschap",
      company: "Universiteit Utrecht",
      startDate: "2022-09-01",
      endDate: "2023-01-31",
      description:
        "Tijdens de bachelor Literatuurwetenschap bekeek en vergeleek ik literatuur van over de hele wereld.",
      eqf: 6,
      degree: false,
    },
    {
      title: "PABO",
      company: "Hogeschool van Arnhem en Nijmegen",
      startDate: "2021-09-01",
      endDate: "2022-08-31",
      description:
        "Op de PABO leerde ik alles over het lesgeven aan kinderen van 4 tot 12 jaar. Ik liep stage op verschillende basisscholen en leerde over de ontwikkeling van kinderen en hoe ik ze het beste kan helpen.",
      eqf: 6,
      degree: false,
    },
    {
      title: "VWO",
      company: "Dominicus College Nijmegen",
      startDate: "2015-08-01",
      endDate: "2015-07-15",
      description:
        "Op het VWO leerde ik over verschillende vakken, zoals Nederlands, Engels, wiskunde, geschiedenis, economie, filosofie, maatschappijleer, lichamelijke opvoeding, en tekenen. Ik koos voor het profiel Cultuur & Maatschappij.",
      eqf: 4,
      degree: true,
    },
  ];

  const createCard = (data) => {
    const li = document.createElement("li");
    const experienceDiv = document.createElement("div");
    experienceDiv.classList.add("experience", "edu");

    if (data.endDate) {
      experienceDiv.classList.add("past");
    }

    const col10Div = document.createElement("div");
    col10Div.classList.add("col-10");

    const spanTitle = document.createElement("span");
    spanTitle.classList.add("title");
    spanTitle.innerText = data.title;
    if (!data.degree) {
      spanTitle.title = "Niet afgerond";
    }

    const spanCompany = document.createElement("span");
    spanCompany.classList.add("school");
    spanCompany.innerHTML = `<i class="bi bi-building-fill"></i>&nbsp;${data.company}`;

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

    edulist.appendChild(li);
  };

  data.forEach((item) => {
    createCard({
      title: item.title,
      company: item.company,
      startDate: item.startDate,
      endDate: item.endDate,
      description: item.description,
      skills: item.skills,
      eqf: item.eqf,
      degree: item.degree,
    });
  });
};

LoadEducation();
