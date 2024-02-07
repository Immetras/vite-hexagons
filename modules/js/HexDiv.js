import { stringify } from "postcss";

export default class Hex {
  constructor(x, z) {
    this.x = x;
    this.z = z;
    this.rotation = 0;

    this.create();
  }

  create() {
    this.hex = document.createElement("div");

    const hStyl = this.hex.style;

    this.hex.className = "hex";
    hStyl.left = `${25 + this.x * 60}px`;
    let zTop = Math.sqrt(3) * 40 * this.z;
    this.x % 2 == 1 ? (zTop += Math.sqrt(3) * 20) : null;
    hStyl.top = `${zTop}px`;

    // console.log(hStyl.left, hStyl.top);
    // this.hex.innerText = `${this.x},${this.z}`;

    this.hex.addEventListener("click", () => {
      this.hex.classList.remove(`h${this.rotation}`);
      this.rotation = this.rotation % 6;
      this.rotation++;
      this.hex.classList.add(`h${this.rotation}`);
      console.log(`clicked`, this);

      if (map.level.length == 0) {
        map.size++;
        map.level.push(
          new lvl(this.x, this.z, this.rotation, this.rotation + 3, curType)
        );
      } else {
        let exists = true;
        for (let i = 0; i < map.level.length; i++) {
          console.warn(map.level[i].x, this.x, ";", map.level[i].z, this.z);
          if (map.level[i].x == this.x && map.level[i].z == this.z) {
            map.level[i] = new lvl(
              this.x,
              this.z,
              this.rotation,
              this.rotation + 3,
              curType
            );
            exists = true;
            break;
          } else {
            exists = false;
          }
        }

        console.error(exists);
        if (!exists) {
          map.size++;
          let test = new lvl(
            this.x,
            this.z,
            this.rotation,
            this.rotation + 3,
            curType
          );
          map.level.push(test);
        }
      }

      console.table(map);
      console.table(map.level);
      const p = document.createElement("p");
      let stringed = JSON.stringify(map, null, 2);
      // console.log(stringed);
      p.innerText = stringed;
      document.getElementById("json").innerHTML = "";
      document.getElementById("json").appendChild(p);

      // document.getElementById("json").innerText = stringed;
    });
  }

  getRoot() {
    return this.hex;
  }
}

class lvl {
  constructor(x, z, dirOut, dirIn, type) {
    this.x = x;
    this.z = z;
    this.dirOut = dirOut;
    this.dirIn = dirIn != 6 ? dirIn % 6 : dirIn;
    this.type = type;
  }
  check() {
    if (map.level.length != 0) {
      this.dirIn = (map.level[map.level.length - 1].dirOut + 3) % 6;
    }
  }
  return() {
    this.check;
    return lvl;
  }
}

let map = {
  size: 0,
  level: [],
};

const buttons = document.getElementById("buttons").children;
let curType = null;

// console.log(buttons);

for (const button of buttons) {
  button == buttons[0] ? select() : null;
  button.addEventListener("click", function () {
    for (const button of buttons) {
      button.style.color = "black";
      button.style.fontWeight = "normal";
    }
    select();
  });
  function select() {
    button.style.color = "blue";
    button.style.fontWeight = "bolder";
    curType = button.innerText;
    console.log("type:", curType);
  }
}
