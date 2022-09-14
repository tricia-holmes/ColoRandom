class Palette {
  constructor() {
    this.id = Date.now();
    this.colors = [
      new Color(),
      new Color(),
      new Color(),
      new Color(),
      new Color(),
    ];
  }
  
  refreshColors() {
    for (var i = 0; i < this.colors.length; i++) {
      this.colors[i].refreshHexCode()
    }
  }

  toggleColorLock(boxId) {
    for (var i = 0; i < this.colors.length; i++) {
      if (boxId === this.colors[i].id) {
        this.colors[i].isLocked = !this.colors[i].isLocked;
        return i
      }
    }
  }
}
