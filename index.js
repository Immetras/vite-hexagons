import "./modules/style/style.css";
import "./modules/js/select.js";
import "./modules/js/button.js";

import Hex from "./modules/js/HexDiv.js";

console.log("loaded");
const select = document.getElementById("size");

select.addEventListener("change", generate);

function generate() {
  const size = select.value;
  console.log(`size is: ${size}`);

  const hexes = document.getElementById("hexes");
  hexes.innerHTML = null;
  // console.log(hexes);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - 1; j++) {
      const hex = new Hex(i, j);
      // console.log(hex);
      hexes.appendChild(hex.getRoot());
    }
  }
}
