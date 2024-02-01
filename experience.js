const LoadExperience = () => {
  const experienceURL =
    "https://0v4j861z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22experience%22%5D%20%7C%20order(startdate%20desc)";

  const worklist = document.querySelector("#worklist");

  fetch(experienceURL)
    .then((response) => response.json())
    .then((data) => {
      data.result.forEach((item) => {
        createCard({
          title: item.title,
          title_nl: item.title_nl,
          company: item.company,
          startDate: item.startdate,
          endDate: item.enddate,
          description: item.description,
          description_nl: item.description_nl,
          skills: item.skills,
          skills_nl: item.skills_nl,
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
    if (localStorage.getItem("lang") == "nl") {
      spanTitle.innerText = data.title_nl;
    } else {
      spanTitle.innerText = data.title;
    }

    const spanCompany = document.createElement("span");
    spanCompany.classList.add("company");
    spanCompany.innerHTML = `<i class="bi bi-briefcase-fill"></i>&nbsp;${data.company}`;

    const spanDuration = document.createElement("span");
    spanDuration.classList.add("duration");

    if (data.endDate == null) {
      switch (localStorage.getItem("lang")) {
        case "nl":
          endDate = "heden";
          break;
        default:
          endDate = "present";
          break;
      }
    } else {
      endDate = endDate = data.endDate.substring(0, data.endDate.length - 3);
    }

    const startDate = data.startDate.substring(0, data.startDate.length - 3);

    spanDuration.innerHTML = `<i class="bi bi-clock-fill"></i>&nbsp;${startDate} - ${endDate}`;

    const pDescription = document.createElement("p");
    pDescription.classList.add("description");
    if (localStorage.getItem("lang") == "nl") {
      pDescription.innerText = data.description_nl;
    } else {
      pDescription.innerText = data.description;
    }

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

      if (localStorage.getItem("lang") == "nl") {
        data.skills = data.skills_nl;
      }

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
};

LoadExperience();
