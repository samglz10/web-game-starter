const button = document.querySelector("#restart-button");

button.onclick = () => {
	window.location.reload();
};

document.getElementById("cursor").style.cursor = "crosshair";


const myScore = () => {
	let scoreCounter =0;
	document.getElementById("scoreboard").textContent = scoreCounter;
	for (let score =0; score < 20; i++)
	scoreCounter++;

}

