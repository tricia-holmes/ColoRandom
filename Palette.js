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
}
