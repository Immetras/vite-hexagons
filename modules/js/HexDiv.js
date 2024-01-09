export default class Hex {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.create();
  }

  create() {
    this.hex = document.createElement("div");

    const hStyl = this.hex.style;

    this.hex.className = "hex";
    hStyl.left = `${25 + this.x * 50}px`;
    hStyl.top = `${
      this.y % 2 == 1
        ? (25 * Math.sqrt(3)) / 2 + this.y * 25 * Math.sqrt(3)
        : this.y * 25 * Math.sqrt(3)
    }px`;

    this.innertext = (this.x, this.y);
  }
  getRoot() {
    return this.div;
  }
}
