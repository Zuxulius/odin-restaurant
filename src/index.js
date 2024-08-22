import "./styles.css";
import initHome from "./home.js";
import initMenu from "./menu.js";

const menuBtn = document.querySelector('.menu-btn');
const homeBtn = document.querySelector('.home-btn');

menuBtn.addEventListener('click', initMenu);
homeBtn.addEventListener('click', initHome);


initHome();
