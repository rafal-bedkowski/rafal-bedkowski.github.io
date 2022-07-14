import "../scss/main.scss";

console.log("HELLO 🚀");

fetch("https://api.github.com/users/rafal-bedkowski/repos")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  })
  .catch((e) => console.log(e));
