export default function contact() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const p1 = document.createElement("p");
  p1.textContent = "Telephone number: 555 - 555 - 123";
  content.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent =
    "This is my WebPack training project! Note to self: Make it fun for you or semi-enjoyable!";
  content.appendChild(p2);
}
