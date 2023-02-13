export default function mainPage() {
  const content = document.querySelector("#content");
  content.textContent = "";
  const img = document.createElement("img");
  img.src =
    "https://www.shutterstock.com/image-vector/pizza-shop-flat-vector-illustration-260nw-1586357821.jpg";
  content.appendChild(img);

  const h1 = document.createElement("h1");
  h1.textContent = "Pizza Place";
  content.appendChild(h1);

  const p1 = document.createElement("p");
  p1.textContent = "Fastest pizza delivery in town GUARANTEED!";
  content.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent =
    "Fresh ingredients - Original italian recipe - Made in brick oven";
  content.appendChild(p2);

  const p3 = document.createElement("p");
  p3.textContent = "30+ toppings combinations - Vegan options - Kids Menu";
  content.appendChild(p3);
}
