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
    hStyl.left = `${25 + this.x * 60}px`;
    this.y *= Math.sqrt(3) * 40;
    this.x % 2 == 1 ? (this.y += Math.sqrt(3) * 20) : null;
    hStyl.top = `${this.y}px`;

    console.log(hStyl.left, hStyl.top);
    this.innertext = `${this.x},${this.y}`;
  }
  getRoot() {
    return this.hex;
  }
}
