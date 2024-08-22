import {content, div, h1, h3} from "./home.js";

export default function initAbout() {
    while(div.firstChild) {
        div.removeChild(div.firstChild)
    }
    div.appendChild(h1);
    h1.textContent = "About Us";
}
