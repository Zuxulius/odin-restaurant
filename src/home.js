import homeImage from "../grasshoppers.jpg";

const h1 = document.createElement("h1");
h1.innerText = "Hop in the Grass";

const h3 = document.createElement("h3");
h3.innerText = "A Michelin Star Restaurant";

const p = document.createElement("p");
p.textContent =
`"Hop in the Grass" is a restaurant with one Michelin star.
We serve only the finest grasshoppers from exotic ends of the earth,
prepared in the style of traditional French cuisine.
Indulge in the novel tastes of grasshoppers with a cosy, homey flavour.
Let yourself be transported to the French countryside and "Hop in the Grass"!`

const content = document.querySelector(".content");

function removeChildren() {
    while(content.firstChild) {
        content.removeChild(content.firstChild)
    }
}

export default function initHome() {
    removeChildren();
    content.appendChild(h1);
    content.appendChild(h3);
    content.appendChild(p);
    h1.textContent = 'Hop in the Grass';
};

export {content, h1, removeChildren};
