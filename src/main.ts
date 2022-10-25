import createFly from "./fly";
const hpBar = document.createElement("img");
hpBar.src= "./assets/healthcarrion.png";
document.getElementById("browser-window")!.appendChild(hpBar)!;
hpBar.classList.add("hp-bar");

let flyCounter = 0;

const moveFly = setInterval(() => {
	createFly();
	if (flyCounter === 20){
		clearInterval(moveFly);
	}
	flyCounter++;
}, 500);



