import homeImage from "../grasshoppers.jpg";

const div = document.createElement("div");
div.classList.add("wrapper")

const h1 = document.createElement("h1");
h1.textContent = "Hop in the Grass";

const h3 = document.createElement("h3");
h3.textContent = "A Michelin Star Restaurant";

const p = document.createElement("p");
p.textContent =
`"Hop in the Grass" is a restaurant with one Michelin star.
We serve only the finest grasshoppers from exotic ends of the earth,
prepared in the style of traditional French cuisine.
Indulge in the novel tastes of grasshoppers with a cosy, homey flavour.
Let yourself be transported to the French countryside and "Hop in the Grass"!`

const content = document.getElementById("content");

export default function initHome() {
    content.appendChild(div)
    div.appendChild(h1);
    div.appendChild(h3);
    div.appendChild(p);
    h1.textContent = 'Hop in the Grass';
};

export {div, h1, h3, content};
