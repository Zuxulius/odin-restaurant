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



initHome();
