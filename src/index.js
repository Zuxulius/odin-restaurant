import "./styles.css";
import initHome from "./home.js";
import initMenu from "./menu.js";
import initAbout from "./about.js";

const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const aboutBtn = document.querySelector('.about-btn');

homeBtn.addEventListener('click', initHome);
menuBtn.addEventListener('click', initMenu);
aboutBtn.addEventListener('click', initAbout);

document.querySelector('header').addEventListener('click', (e) => focusTab(e));

function focusTab(e) {
    if (e.target.tagName === "BUTTON") {
        const tabs = document.querySelectorAll('header button');
        tabs.forEach((tab) => tab.classList.remove('focus'));

        switch (e.target) {
            case homeBtn:
                homeBtn.classList.toggle('focus');
                break;
            case menuBtn:
                menuBtn.classList.toggle('focus');
                break;
            case aboutBtn:
                aboutBtn.classList.toggle('focus');
        }
    }
}

initHome();
