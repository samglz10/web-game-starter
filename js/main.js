import createFly from "./fly";

createFly();

let fly = createFly();



const moveFly = setInterval(() => {
    createFly();
    for (let i = 0; i < 1; i++){
         createFly();
    }
    
}, 3000);

const hpBar = document.createElement("img");
hpBar.src= "./assets/healthcarrion.png";
document.getElementById("browser-window").appendChild(hpBar);
hpBar.classList.add("hp-bar");

