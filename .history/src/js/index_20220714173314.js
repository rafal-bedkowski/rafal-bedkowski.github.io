import "../scss/main.scss";

console.log("HELLO 🚀");

fetch("https://api.github.com/users/rafal-bedkowski/repos?sort=created&direction=asc")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  })
  .catch((e) => console.log(e));
