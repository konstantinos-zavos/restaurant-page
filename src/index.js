import mainPage from "./mainPage";
import menu from "./menu";

mainPage();

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
  mainPage();
});

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", () => {
  menu();
});

// const menuButton = document.getElementById(menu);
// menuButton.onclick = menu();
