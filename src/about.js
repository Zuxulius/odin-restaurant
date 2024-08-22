import {div, h1, h3, content} from "./home.js";

export default function initAbout() {
    while(div.firstChild) {
        div.removeChild(div.firstChild)
    }
    h1.textContent = "About Us";
    div.appendChild(h1);
}
