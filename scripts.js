// DOM Elements

// Colors
var box1 = document.querySelector("#box1")
var box2 = document.querySelector("#box2")
var box3 = document.querySelector("#box3")
var box4 = document.querySelector("#box4")
var box5 = document.querySelector("#box5")

// Hex codes
var hex1 = document.querySelector('#hex1')
var hex2 = document.querySelector('#hex2')
var hex3 = document.querySelector('#hex3')
var hex4 = document.querySelector('#hex4')
var hex5 = document.querySelector('#hex5')

// Locks
var lock1 = document.querySelector('#lock1')
var lock2 = document.querySelector('#lock2')
var lock3 = document.querySelector('#lock3')
var lock4 = document.querySelector('#lock4')
var lock5 = document.querySelector('#lock5')

// Buttons 
var newButton = document.querySelector("#new")
var saveButton = document.querySelector("#save")

// Event Listeners
window.addEventListener("load", randomizeColorPalette)
newButton.addEventListener("click", randomizeColorPalette)
// saveButton.addEventListener("click", function-here) -> need to add function

// Global Variables
var currentPalette
var savedPalettes = []

// Event Handlers
function randomizeColorPalette() {
  currentPalette = new Palette()

  box1.style.backgroundColor = currentPalette.colors[0].hexCode
  box2.style.backgroundColor = currentPalette.colors[1].hexCode
  box3.style.backgroundColor = currentPalette.colors[2].hexCode
  box4.style.backgroundColor = currentPalette.colors[3].hexCode 
  box5.style.backgroundColor = currentPalette.colors[4].hexCode 

  hex1.innerText = currentPalette.colors[0].hexCode
  hex2.innerText = currentPalette.colors[1].hexCode
  hex3.innerText = currentPalette.colors[2].hexCode
  hex4.innerText = currentPalette.colors[3].hexCode 
  hex5.innerText = currentPalette.colors[4].hexCode 
}