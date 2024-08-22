import {content, h1, removeChildren} from "./home.js";

const menu = [
    {
        name: "1. Éclat de Sauterelle à la Provençale",
        price: "€ 76",
        desc:
                `A delicate dish featuring crispy grasshoppers sautéed with fragrant garlic,
                tomatoes, and herbes de Provence. Served over a bed of creamy polenta infused
                with saffron and accompanied by a light drizzle of citrus-infused olive oil.
                The dish is finished with a sprinkle of fleur de sel and microgreens for a touch of elegance.
                `,
    },
    {
        name: "2. Ravioles de Sauterelles à la Truffe Noire",
        price: "€ 103",
        desc:
                `Handmade ravioli filled with a luxurious mixture of ground grasshoppers,
                ricotta, and wild mushrooms, delicately seasoned with truffle oil.
                Served in a rich black truffle and cream sauce,
                garnished with shaved truffles and a dusting of Parmesan cheese.
                This dish is a celebration of earthy flavors and decadent textures.
                `,
    },
    {
        name: "3. Tournedos de Sauterelle et Foie Gras",
        price: "€ 122",
        desc:
                `A sublime combination of tender grasshopper filets and seared foie gras,
                served atop a bed of velvety mashed potatoes enriched with butter and crème fraîche.
                The dish is accompanied by a red wine and shallot reduction,
                with a side of caramelized root vegetables. A true gastronomic indulgence,
                blending the delicate flavors of grasshopper with the rich, buttery essence of foie gras.
                `,
    },
]

function createMenu() {
    menu.forEach(function(item){
        const menuItemWrap = document.createElement('div');
        menuItemWrap.classList.add('menu-item-wrapper');

        const span = document.createElement('span');
        const itemName = document.createElement('p');
        const itemPrice = document.createElement('p');
        itemPrice.style.fontStyle = "italic";
        const itemDesc = document.createElement('p');

        itemName.textContent = `${item.name}`;
        itemPrice.textContent = `${item.price}`;
        itemDesc.textContent = `${item.desc}`

        menuItemWrap.appendChild(span);
        span.appendChild(itemName);
        span.appendChild(itemPrice);
        menuItemWrap.appendChild(itemDesc);

        content.appendChild(menuItemWrap);
    })
}

export default function initMenu() {
    removeChildren();
    h1.textContent = "Menu";
    content.appendChild(h1);
    createMenu();
}
