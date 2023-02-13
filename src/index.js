import mainPage from "./mainPage";
import menu from "./menu";
import contact from "./contact";
import logo from "./logo.jpg";

mainPage();

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
  mainPage();
});

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", () => {
  menu();
});

const contactBtn = document.querySelector("#contact");
contactBtn.addEventListener("click", () => {
  contact();
});
