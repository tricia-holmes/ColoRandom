class Color {
  constructor() {
    this.hexCode = this.makeRandomColor();
    this.isLocked = false;
  }
    
  makeRandomColor() {
    var hexCode = "#"
    var hexValues = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    for (var i = 0; i < 6; i++) {
			hexCode += hexValues[Math.floor(Math.random() * hexValues.length)]
		}
        
    return hexCode
	}
}