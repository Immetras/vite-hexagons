const select = document.getElementById("size");

for (let i = 3; i < 16; i++) {
  const opt = document.createElement("option");
  opt.value = i;
  opt.innerText = i;
  select.appendChild(opt);
}
