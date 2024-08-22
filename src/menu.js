import {div, h1, h3, content} from "./home.js";

export default function initMenu() {
    while(div.firstChild) {
        div.removeChild(div.firstChild)
    }
    h1.textContent = "Menu";
    div.appendChild(h1);
}
