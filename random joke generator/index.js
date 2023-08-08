const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .joke p");

document.addEventListener("DOMContentLoaded", getJock);

button.addEventListener("click", getJock);

async function getJock() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });
  const jokeObj = await jokeData.json();
  jokeDiv.innerHTML = jokeObj.joke;
  console.log(jokeData);
}


const touchButton = document.querySelector(".float-text");
const card = document.querySelector(".float-card-info");
const close = document.querySelector(".gg-close-r");

touchButton.addEventListener("click", moveCard);
close.addEventListener("click", moveCard);

function moveCard() {
  card.classList.toggle("active");
}
const categorySelect = document.getElementById("category");
const getJokeBtn = document.getElementById("getJokeBtn");
const jokeText = document.getElementById("joke");

getJokeBtn.addEventListener("click", getJoke);

async function getJoke() {
  const category = categorySelect.value;
  const apiUrl = `https://v2.jokeapi.dev/joke/${category}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.type === "single") {
      jokeText.innerText = data.joke;
    } else {
      jokeText.innerText = `${data.setup} ${data.delivery}`;
    }
  } catch (error) {
    console.log("Error fetching joke:", error);
  }
}