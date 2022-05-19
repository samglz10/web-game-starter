const button = document.querySelector("#restart-button");

button.onclick = () => {
	window.location.reload();
};
document.getElementById("cursor").style.cursor = "crosshair";