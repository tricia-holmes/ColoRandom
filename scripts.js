// Query Selectors
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
    
