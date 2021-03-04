const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => showJoke(data.joke))
    .catch(error => console.log(error.message));
};

function showJoke(joke) {
  jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerText = joke;
}

window.onload = () => fetchJoke();