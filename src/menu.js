import {content, h1, removeChildren} from "./home.js";

const menu = [
    {
        name: "Lorem",
        price: "€ 76",
        desc:
                `
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                `,
    },
    {
        name: "Lorem",
        price: "€ 103",
        desc:
                `
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                `,
    },
    {
        name: "Lorem",
        price: "€ 122",
        desc:
                `
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
