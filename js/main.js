import createFly from "./fly";

createFly();


const hpBar = document.createElement("img");
hpBar.src= "./assets/healthcarrion.png";
document.getElementById("browser-window").appendChild(hpBar);
hpBar.classList.add("hp-bar");

