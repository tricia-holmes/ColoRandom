class Color {
  constructor() {
    this.id = Math.floor(Math.random() * 10000).toString();
    this.hexCode = this.makeRandomColor();
    this.isLocked = false;
  }

  makeRandomColor() {
    var hexCode = "#";
    var hexValues = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];

    for (var i = 0; i < 6; i++) {
      hexCode += hexValues[Math.floor(Math.random() * hexValues.length)];
    }

    return hexCode;
  }

  refreshHexCode() {
    if (this.isLocked = false) {
      this.hexCode = this.makeRandomColor();
    }
  }

  lockIconValue() {
    if(this.isLocked === true) {
      return "lock"
    } else {
      return "lock_open"
    }
  }
}

