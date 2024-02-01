const personalInformationHeader = document.querySelector("section#personal h1");
const experienceHeader = document.querySelector("section#work h1");
const educationHeader = document.querySelector("section#edu h1");
const projectsHeader = document.querySelector("section#projects h1");
const servicesHeader = document.querySelector("section#services h1");
const interestedSpan = document.querySelector("span#interestedSpan");

if (localStorage.getItem("lang") == "nl") {
  personalInformationHeader.innerText = "Persoonlijke informatie";
  experienceHeader.innerText = "Werkervaring";
  educationHeader.innerText = "Opleiding";
  projectsHeader.innerText = "Projecten";
  servicesHeader.innerText = "Diensten";
  interestedSpan.innerText = "Geïnteresseerd?";
} else {
  personalInformationHeader.innerText = "Personal information";
  experienceHeader.innerText = "Work experience";
  educationHeader.innerText = "Education";
  projectsHeader.innerText = "Projects";
  servicesHeader.innerText = "Services";
  interestedSpan.innerText = "Interested?";
}

// Language links
if (localStorage.getItem("lang") == null) {
  localStorage.setItem("lang", "nl"); // Set language to Dutch if not set
}

if (localStorage.getItem("lang") == "nl") { // If language is Dutch; make English look like a link
  document.getElementById("lang_en").classList.add("link");
  document.getElementById("lang_nl").classList.remove("link");
} else { // And the other way around
  document.getElementById("lang_nl").classList.add("link");
  document.getElementById("lang_en").classList.remove("link");
}

function english() { // Set language to English
  if (localStorage.getItem("lang") != "en") {
      localStorage.setItem("lang", "en");
      location.reload();
  }
}

function dutch() { // Set language to Dutch
  if (localStorage.getItem("lang") != "nl") {
      localStorage.setItem("lang", "nl");
      location.reload();
  }
}