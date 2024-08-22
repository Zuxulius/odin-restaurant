import {content, h1, removeChildren} from "./home.js";

export default function initMenu() {
    removeChildren();
    h1.textContent = "Menu";
    content.appendChild(h1);
}
