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
window.addEventListener("load", randomizeColorPalette);
newButton.addEventListener("click", randomizeColorPalette);
// saveButton.addEventListener("click", function-here) -> need to add function

// Global Variables
var currentPalette;
var savedPalettes = [];

// Event Handlers
function randomizeColorPalette() {
  currentPalette = new Palette();

  var colors = currentPalette.colors;
  for (var i = 0; i < colors.length; i++) {
    var color = colors[i];
    boxes[i].style.backgroundColor = color.hexCode;
    hexes[i].innerText = color.hexCode;
    locks[i].innerText = color.isLocked ? "lock" : "lock_open";
  }
}
