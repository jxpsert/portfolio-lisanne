const personalInformationHeader = document.querySelector("section#personal h1");
const experienceHeader = document.querySelector("section#work h1");
const educationHeader = document.querySelector("section#edu h1");
const projectsHeader = document.querySelector("section#projects h1");

if (localStorage.getItem("lang") == "nl") {
  personalInformationHeader.innerText = "Persoonlijke informatie";
  experienceHeader.innerText = "Werkervaring";
  educationHeader.innerText = "Opleiding";
  projectsHeader.innerText = "Projecten";
} else {
  personalInformationHeader.innerText = "Personal information";
  experienceHeader.innerText = "Work experience";
  educationHeader.innerText = "Education";
  projectsHeader.innerText = "Projects";
}
