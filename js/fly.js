
// fly needs to reach bottom value to reach the meat

const fly = document.createElement("img");
fly.src= "./assets/flyicon.svg";
document.getElementById("browser-window").appendChild(fly);
fly.classList.add("fly");

let position = 0;
const flyObject = document.querySelector(".fly");
/*
const DOMElement = {
    tag: "img",
    classList: ["fly"],
    style: {
        left: "",
        bottom: "",
        position: "static"
    }
    addEventListener: (event, callback) => callback()
}
*/


flyObject.style.position = "absolute";

const animate = setInterval(() => {
	position += 3;
	flyObject.style.left = Math.random()*2 + position + "px";
	flyObject.style.right = Math.random()*2 + position + "px";
	flyObject.style.top = position + "px";3
    console.log(left);

}, 10);

const stop = () => {
	clearInterval(animate);
};
// Function send Fly to Meat, the clear the interval
//setInterval to set slowly change the y, throw math.random on x value

// Check if Fly postion is at the meat if so clear interval. 
