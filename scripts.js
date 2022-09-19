// DOM Elements
var boxes = document.querySelectorAll(".swatch")
var hexes = document.querySelectorAll(".box-details > p")
var locks = document.querySelectorAll(".material-symbols-outlined")
var newButton = document.querySelector("#new")
var saveButton = document.querySelector("#save")

// Side Display
var asideSection = document.querySelector(".palettes")
var savedPaletteSection = document.querySelector(".saved-palettes")

// Event Listeners
window.addEventListener("load", createNewPalette)
newButton.addEventListener("click", randomizeColorPalette)
saveButton.addEventListener("click", savePalette)
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", toggleLock)
}
savedPaletteSection.addEventListener("click", handleSavedPaletteSectionClick)

// Global Variables
var currentPalette
var savedPalettes = []

// Event Handlers
function createNewPalette() {
  currentPalette = new Palette()
  var colors = currentPalette.colors
  for (var i = 0; i < colors.length; i++) {
    var color = colors[i]
    boxes[i].setAttribute("id", color.id)
    boxes[i].style.backgroundColor = color.hexCode
    hexes[i].innerText = color.hexCode
    locks[i].innerText = "lock_open"
  }
}

function randomizeColorPalette() {
  currentPalette.refreshColors()
  var colors = currentPalette.colors
  for (var i = 0; i < colors.length; i++) {
    var color = colors[i]
    boxes[i].style.backgroundColor = color.hexCode
    hexes[i].innerText = color.hexCode
  }
}

function toggleLock(event) {
  var boxId = event.target.id
  var index = currentPalette.toggleColorLock(boxId)
  locks[index].innerText = currentPalette.colors[index].lockIconValue()
}

function savePalette() {
  savedPalettes.push(currentPalette)
  asideSection.innerHTML = ""
  for (var i = 0; i < savedPalettes.length; i++) {
    var colors = savedPalettes[i].colors
    var paletteId = savedPalettes[i].id
    createSection(colors, paletteId)
  }
}

function createSection(colors, paletteId) {
  var newElement = document.createElement("section")
  newElement.classList.add("palette")
  for (var i = 0; i < colors.length; i++) {
    newElement.innerHTML += `
      <div style = "background-color:${colors[i].hexCode}"></div>`
    asideSection.appendChild(newElement)
  }
    newElement.innerHTML += `
      <button class="delete-button">
         <span class="material-symbols-outlined" id="${paletteId}"> delete </span>
      </button>`
  
  createNewPalette()
}

function deletePalette(event){
  for (var i = 0; i < savedPalettes.length; i++) {
    if (savedPalettes[i].id === event.target.id) {
      savedPalettes.splice(i, 1)
    }
  }
  event.target.parentNode.parentNode.remove()
  }

function handleSavedPaletteSectionClick(event) {
  if (event.target.className === "material-symbols-outlined") {
    deletePalette(event)
  }
}



