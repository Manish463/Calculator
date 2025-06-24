let nums = document.querySelectorAll(".num");
let opts = document.querySelectorAll(".opt");
const ac = document.querySelector("#clear");
const bks = document.querySelector("#bks");
const eq = document.querySelector("#equal");
let inp = document.getElementsByTagName("input");

function scrollToEnd(inputElement) {
  inputElement.scrollLeft = inputElement.scrollWidth;
}

function playAudio() {
  new Audio("spacebar-click-keyboard-199448.mp3").play();
}

for (let num of nums) {
  num.addEventListener("click", () => {
    playAudio();
    if (inp[0].value !== "") {
      inp[0].value = inp[1].value = "";
    }
    inp[1].value += num.value;
    scrollToEnd(inp[1]);
  })
}

ac.onclick = () => {
  playAudio();
  inp[0].value = "";
  inp[1].value = "";
}

bks.onclick = () => {
  playAudio();
  let str = inp[1].value;
  inp[1].value = str.slice(0, -1);
}

for (let opt of opts) {
  opt.addEventListener("click", () => {
    playAudio();
    str = inp[1].value;
    let s = str[str.length - 1];
    if (s == '+' || s == '-' || s == '*' || s == '/') {
      inp[1].value = str.slice(0, -1);
    }
    inp[1].value += opt.value;
    scrollToEnd(inp[1]);
  })
}

eq.onclick = () => {
  playAudio();
  str = inp[1].value;
  str = str.replace("%", "/100");
  inp[0].value = eval(str);
}