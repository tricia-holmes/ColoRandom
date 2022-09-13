// DOM Elements

// Colors
var box1 = document.querySelector("#box1")
var box2 = document.querySelector("#box2")
var box3 = document.querySelector("#box3")
var box4 = document.querySelector("#box4")
var box5 = document.querySelector("#box5")
// var swatch = document.querySelector(".swatch")




// Event Listener
newButton.addEventListener("click")
saveButton.addEventListener("click")







//create a COLOR class
class Color {
    constructor(){
        this.hexCode = this.makeRandomColor();
        this.isLocked = false;
        
    }
    makeRandomColor() {
        var hexCode = "#"
        var hexValues = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        for (var i = 0; i < 6; i++) {
			hexCode += hexValues[Math.floor(Math.random() * hexValues.length)]
		}
        return hexCode
	}
}

class Palette {
    constructor(){
        this.colors = colors
        this.ID = Date.now()
    }
}


//Jocelle Notes:
       //for each.
    //create different global variable that will include: 
        //box, 
        //hexcode 
        //islocked.color
    //how do we retain this colors in this box.
//create Palette class
    //create a new instance on palette when saving
    //be able to load colors
        //should have 5 colors
        //should have unique ID
        //replace colors with new colors.
            //create a function with if statement (if locked)
            //event clicker that will invoke a function 
//Create Data Model
    //variable to store saves
    //var to create color palettes
    
=======

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