//import * as jsPDF from "jspdf";
const jsPDF = require("jspdf");
const html2canvas = require("html2canvas");

const isSite = document.querySelector("#isSite");
const loginPage = document.getElementById("login");
const passwordPage = document.getElementById("generator");
const loginBtn = document.getElementById("login-btn");
const userNameBtn = document.getElementById("user-btn");
const username = document.getElementById("username");

function toPassGen() {
  document.getElementById("user").textContent = `Username: ${
    document.querySelector("#isName").value
  }`;
  username.classList.add("hidden");
  passwordPage.classList.remove("hidden");
}

function toUsername() {
  document.querySelector("#site").textContent = `Password for ${isSite.value}`;
  loginPage.classList.add("hidden");
  username.classList.remove("hidden");
}

function shortcut1(e) {
  if (e.key === "Enter") {
    toUsername();
  }
}
function shortcut2(e) {
  if (e.key == "Enter") {
    toPassGen();
  }
}

isSite.addEventListener("keydown", shortcut1);

loginBtn.addEventListener("click", toUsername);

userNameBtn.addEventListener("click", toPassGen);

document.querySelector("#isName").addEventListener("keydown", shortcut2);

function print() {
  const filename = `./Passwords/${
    document.querySelector("#site").textContent
  }.pdf`;
  html2canvas(document.querySelector("#print")).then((canvas) => {
    let pdf = new jsPDF.jsPDF("p", "mm", "a4");
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
    pdf.save(filename);
  });
}

document.getElementById("pdf").addEventListener("click", print);
