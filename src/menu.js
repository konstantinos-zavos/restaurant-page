export default function menu() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const h1 = document.createElement("h1");
  h1.textContent = "Special pizza";
  h1.style = "display:flex; align-items:center; justify-content:center; padding:10px;";
  content.appendChild(h1);

  const img = document.createElement("img");
  img.src = "https://i.kym-cdn.com/photos/images/facebook/000/961/839/4e2.jpg";
  img.style = "width:250px; height:200px;";
  content.appendChild(img);

  const p1 = document.createElement("p");
  p1.textContent = "Fresh mozzarella to get the gooiest, cheesiest pepe.";
  content.appendChild(p1);
}
