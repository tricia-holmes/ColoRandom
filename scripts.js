// DOM Elements

// Colors
// Selecting all the color boxes with swatch class, instead of selecting each one separetly.
var boxes = document.querySelectorAll(".swatch");

// Hex codes
// Selecting all the text with p tag inside the box-details class, instead of selecting each one separetly.
var hexes = document.querySelectorAll(".box-details > p");

// Locks
// Selecting all the icon span with material-symbols-outlined class, instead of selecting each one separetly.
var locks = document.querySelectorAll(".material-symbols-outlined");

// Buttons
var newButton = document.querySelector("#new");
var saveButton = document.querySelector("#save");

// Event Listeners
window.addEventListener("load", createNewPalette);
newButton.addEventListener("click", randomizeColorPalette);
saveButton.addEventListener("click", savePalette);
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("dblclick", lockColor);
}

// Global Variables
var currentPalette;
var savedPalettes = [];
var asideSection = document.querySelector(".palettes");

// Event Handlers

function createNewPalette() {
  currentPalette = new Palette();

  var colors = currentPalette.colors;

  for (var i = 0; i < colors.length; i++) {
    var color = colors[i];
    boxes[i].setAttribute("id", color.id);
    boxes[i].style.backgroundColor = color.hexCode;
    hexes[i].innerText = color.hexCode;
    locks[i].innerText = "lock_open";
  }
}

function randomizeColorPalette() {
  currentPalette.refreshColors();

  var colors = currentPalette.colors;
  for (var i = 0; i < colors.length; i++) {
    var color = colors[i];
    boxes[i].style.backgroundColor = color.hexCode;
    hexes[i].innerText = color.hexCode;
  }
}

function lockColor(event) {
  var boxId = event.target.id;
  var index = currentPalette.toggleColorLock(boxId)
  locks[index].innerText = currentPalette.colors[index].lockIconValue()
}

function savePalette() {
  savedPalettes.push(currentPalette);
  asideSection.innerHTML = "";
  for (var i = 0; i < savedPalettes.length; i++) {
    var colors = savedPalettes[i].colors;
    createSection(colors);
  }
}
function createSection(colors) {
  var newElement = document.createElement("section");
  newElement.classList.add("palette");

  for (var i = 0; i < colors.length; i++) {
    newElement.innerHTML += `
      <div style = "background-color:${colors[i].hexCode}"></div>
      `;
    asideSection.appendChild(newElement);
  }
  newElement.innerHTML += `
    <button><span class="material-symbols-outlined"> delete </span></button>
    `;

  createNewPalette();
}
