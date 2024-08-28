import homeImage from "../grasshoppers.jpg";

const h1 = document.createElement("h1");
h1.innerText = "Hop in the Grass";

const p = document.createElement("p");
p.textContent =
`Welcome to "Hop in the Grass", a Michelin-starred culinary experience like no other.

At our esteemed restaurant, we take pride in serving only the finest grasshoppers, sourced from the most exotic corners of the globe. Each dish is meticulously crafted in the tradition of classic French cuisine, offering a unique and sophisticated twist on a truly novel ingredient.

Savor the distinct, cozy flavors that evoke the warmth and charm of the French countryside. Allow yourself to be whisked away on a culinary journey that is as unexpected as it is delightful.

Embark on an unforgettable gastronomic adventure and -
"Hop in the Grass!"`

const content = document.querySelector(".content");

function removeChildren() {
    while(content.firstChild) {
        content.removeChild(content.firstChild)
    }
}

export default function initHome() {
    removeChildren();
    content.appendChild(h1);
    content.appendChild(p);
    h1.textContent = 'Hop in the Grass';
};

export {content, h1, removeChildren};
