const LoadSettings = () => {
  const settingsURL =
    "https://0v4j861z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'settings'%5D";

  const edulist = document.querySelector("#edulist");

  fetch(settingsURL)
    .then((response) => response.json())
    .then((data) => {
      const item = data.result[0];

      const title = document.querySelector("section#personal span.fs-2");
      const description = document.querySelector("section#personal p.fs-6");
      const contact = document.querySelector("section#personal span.contact");

      title.innerText = item.title;
      description.innerText = item.description;
      contact.innerHTML = item.contact;

      if (localStorage.getItem("lang") == "nl") {
        title.innerText = item.title_nl;
        description.innerText = item.description_nl;
        contact.innerHTML = item.contact_nl;
      }
    });
};

LoadSettings();
