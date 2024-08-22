import {content, h1} from "./home.js";

export default function initMenu() {
    while(content.firstChild) {
        content.removeChild(content.firstChild)
    }
    h1.textContent = "Menu";
    content.appendChild(h1);
}
