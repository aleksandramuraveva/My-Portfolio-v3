const cursor = document.querySelector(".cursor");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
//cursor
let timeout;

document.addEventListener("mousemove", (e) => {
	let x = e.pageX;
	let y = e.pageY;

	cursor.style.top = y + "px";
	cursor.style.left = x + "px";
	cursor.style.display = "block";

	//function to stop animation
	function mouseStopped() {
		cursor.style.display = "none";
	}
	//hiding animation
	clearTimeout(timeout);
	timeout = setTimeout(mouseStopped, 1000);

})

//stopping animation off the screen
document.addEventListener("mouseout", () => {
	cursor.style.display = "none";
})

//cursor ends
