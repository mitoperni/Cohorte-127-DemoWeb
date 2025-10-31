import "./style.css";

const button = document.getElementById("generator");
const list = document.getElementById("list");
const container = document.getElementById("container-list");
let numbers = Array.from({ length: 150 }, (_, i) => i + 1);

function generateRandomNumber() {
  return Math.floor(Math.random() * numbers.length);
}

function generateNewNumber() {
  // Generamos un nuevo índice aleatorio
  const newIndex = generateRandomNumber();
  // Cogemos un número aleatorio del array numbers
  const newNumber = numbers[newIndex];
  if (newNumber === undefined) {
    container.innerHTML = "<h1>HAS ACABADO EL MASTER DE JAVASCRIPT</h1>";
  }
  // Borramos ese número del array numbers
  numbers.splice(newIndex, 1);
  list.innerHTML += `<li>${newNumber}</li>`;
}

button.addEventListener("click", generateNewNumber);
