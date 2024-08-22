import {content, h1} from "./home.js";

export default function initAbout() {
    while(content.firstChild) {
        content.removeChild(content.firstChild)
    }
    content.appendChild(h1);
    h1.textContent = "About Us";
}
