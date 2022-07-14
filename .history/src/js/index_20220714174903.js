import "../scss/main.scss";

console.log("HELLO 🚀");

fetch("https://api.github.com/users/rafal-bedkowski/repos?sort=created&direction=asc")
  .then((res) => res.json())
  .then((res) => {
    const container = document.querySelector('projects-grid--js')
  })
  .catch((e) => console.log(e));
