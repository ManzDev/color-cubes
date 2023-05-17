import { playSound } from "./modules/sounds.js";

const colors = [
  "black",
  "white",
  "hotpink",
  "cyan",
  "indigo",
  "darkblue",
  "green",
  "tomato"
];

const TOTAL_PIXELS = 100;
let selectedColor = "black";

// Función que crea la barra de colores
function createColors() {
  const divColors = document.querySelector(".colors");

  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    divColors.innerHTML += /* html */`<div class="color" style="--color: ${color}"></div>`;
  }
}

// Función que crea cada pixel del grid
function createGrid() {
  const divPixels = document.querySelector(".pixels");

  for (let i = 0; i < TOTAL_PIXELS; i++) {
    divPixels.innerHTML += "<div class=\"pixel\"></div>";
  }
}

// Función que escuche cuando se hace click en los colores
function addColorListeners() {
  const colorElements = document.querySelectorAll(".color");

  for (let i = 0; i < colorElements.length; i++) {
    const divColor = colorElements[i];
    divColor.addEventListener("click", function () {
      selectedColor = colors[i];
      colorElements.forEach((element) => element.classList.remove("selected"));
      divColor.classList.add("selected");
      playSound("beep");
    });
  }
}

// Función que escuche cuando se hace click en los pixels
function addPixelListeners() {
  const pixelElements = document.querySelectorAll(".pixel");

  for (let i = 0; i < pixelElements.length; i++) {
    const divPixel = pixelElements[i];
    divPixel.addEventListener("click", function () {
      divPixel.style.setProperty("--color", selectedColor);
      playSound("pixel");
    });
  }
}

createColors();
createGrid();
addColorListeners();
addPixelListeners();

// Añadidos:
// Goma de borrar para el color blanco
// Añadir un sonido cuando pulsas en un pixel o color
// Añadir un selector de tamaño del grid
// Botón para crear un nuevo lienzo
// Hacer zoom en el lienzo
// Cambiar cursor por un pincel
