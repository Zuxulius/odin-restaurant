import {content, h1, removeChildren} from "./home.js";

const staff = [
    {
        name: "Remy",
        title: "Chef de Cuisine",
    },
    {
        name: "Colette",
        title: "Sous Chef",
    },
    {
        name: "Linguini",
        title: "Maître d'"
    }
]

const contact = {
    name: "Hop in the Grass",
    street: "23 Rue des Sauterelles",
    area: "75001 Paris, France",
    phone: 12345678,
    email: "sauterelle@hopinthegrass.fr",
}


function addStaff() {
    staff.forEach(function(member){
        const h3 = document.createElement('h3');
        h3.textContent = `${member.title}: ${member.name}`;
        h3.style.textDecoration = 'underline';
        content.appendChild(h3)
    })
}

function addContactInfo() {
    const addr = document.createElement('address');
    addr.classList.add('addr-wrap');
    content.appendChild(addr);
    for (let key in contact) {
        const addrItem = document.createElement('p');
        addrItem.textContent += `${contact[key]}`;
        addr.appendChild(addrItem);
    }
}

export default function initAbout() {
    removeChildren();
    content.appendChild(h1);
    h1.textContent = "About Us";
    addStaff()
    addContactInfo();
}
