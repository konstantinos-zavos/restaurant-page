import mainPage from "./mainPage";
import menu from "./menu";

mainPage();

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
  alert("Hello World");
});

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", () => {
  alert("Hello second");
});

// const menuButton = document.getElementById(menu);
// menuButton.onclick = menu();
