const button = document.querySelector("#restart-button");

button.onClick = () => {
	window.location.reload();
};

document.getElementById("cursor")!.style.cursor = "crosshair";


const myScore = () => {
	let scoreCounter = 0;
	const scoreboard = document.getElementById("scoreboard") as HTMLInputElement;
	scoreboard?.value = scoreCounter;
	for (let score = 0; score++ < 20;)
		scoreCounter++;

};

