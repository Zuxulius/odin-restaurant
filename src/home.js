import homeImage from "../grasshoppers.jpg";

const image = document.createElement("img");
image.src = homeImage;
image.alt = "An image of plated grasshoppers."
image.classList.add("homeImage");

const h1 = document.createElement("h1");
h1.innerText = "Hop in the Grass";

const h3 = document.createElement("h3");
h3.innerText = "A Michelin Star Restaurant";

const p = document.createElement("p");
p.innerText =
`Hop in the Grass is a restaurant with one Michelin star.
We serve only the finest grasshoppers from exotic ends of the earth,
prepared in the style of traditional French cuisine.
Indulge in the novel tastes of grasshoppers with cosy, homey flavour.
Transport yourself to the French countryside and "Hop in the Grass"!`

const content = document.getElementById("content");

export default function init() {
    content.appendChild(image);
    content.appendChild(h1);
    content.appendChild(h3);
    content.appendChild(p);
};
