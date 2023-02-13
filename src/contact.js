export default function contact() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const p1 = document.createElement("p");
  p1.textContent = "Telephone number: 555 - 555 - 123";
  content.appendChild(p1);
}
