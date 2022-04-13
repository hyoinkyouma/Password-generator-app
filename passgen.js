//Charset
const lettersLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const chars = ["#", "@", "$", "!"];
//gen rand number
const randNum = (num) => Math.floor(Math.random() * num);
//returns random letter
function genRandLetter(amount) {
  let letterArr = [];
  while (amount > 0) {
    num = randNum(26);
    letterArr.push(lettersLower[num]);
    amount -= 1;
  }
  return letterArr;
}

//return rand number
function genRandNum(amount) {
  let numArr = [];
  while (amount > 0) {
    num = randNum(9);
    numArr.push(numbers[num]);
    amount -= 1;
  }
  return numArr;
}

//generate random symbol
function genRandSym(amount) {
  let symArr = [];
  while (amount > 0) {
    num = randNum(4);
    symArr.push(chars[num]);
    amount -= 1;
  }
  return symArr;
}

function concatPass(letter, sym, num) {
  let pass = letter + sym + num;
  pass = pass.toString();
  console.log(pass);
  pass = pass.replaceAll(",", "").replaceAll(", ", "");

  return pass;
}

//dom
const passRender = document.querySelector("#genPass");
const passBtn = document.querySelector("#genBtn");

const generatePass = () => {
  let letter = genRandLetter(3);
  let num = genRandNum(3);
  let sym = genRandSym(2);
  passRender.textContent = concatPass(letter, num, sym);
};
passBtn.addEventListener("click", generatePass);

if (document.querySelector)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Space") {
      generatePass();
    }
  });
