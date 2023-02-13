export default function mainPage() {
  const content = document.querySelector("#content");
  const img = document.createElement("img");
  img.src = "../logo.jpg";
  content.appendChild(img);
}
