/* eslint-disable @typescript-eslint/no-non-null-assertion */
const createFly = () => {
// fly needs to reach bottom value to reach the meat

	const fly = document.createElement("img");
	fly.src= "./assets/flyicon.png";
	document.getElementById("browser-window")!.appendChild(fly)!;

	fly.classList.add("fly");

	let position = 0;
	let xPosition = Math.random()*100;
	const flyGoesLeft = Math.random() > .5;

	fly.addEventListener("click",()=>{
		fly.remove();
	});

	
	fly.style.position = "absolute";

	const animate = setInterval(() => {
		position += 5;
		if (Math.random() > 0.5){
			xPosition -= flyGoesLeft? 1 : 0.25;

		} else {
			xPosition += flyGoesLeft? 0.25 : 1;
		}
		fly.style.left = xPosition + "%";		 
		fly.style.top = position + "px";
		if (position > window.innerHeight) {
			fly.remove();
			clearInterval(animate);
		}
	}, 100);




	// Function send Fly to Meat, the clear the interval
	//setInterval to set slowly change the y, throw math.random on x value

// Check if Fly postion is at the meat if so clear interval. 
};


export default createFly;