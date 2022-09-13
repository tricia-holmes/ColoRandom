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
