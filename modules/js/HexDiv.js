
export default class Hex {

    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.create();
    };

    create() {
        this.hex = document.createElement("div")

        const hStyl = this.hex.style;

        this.hex.className = "hex";
        hStyl.left = `${x * 50}px`;
        hStyl.top = `${y * 25 * Math.sqrt(3)}px`;
    };
};