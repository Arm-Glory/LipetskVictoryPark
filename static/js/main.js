/* Varables */
var body = document.querySelector("body");
var showBox = document.querySelector("#showBox");
var showBoxImg = showBox.querySelector("img");
var upBtn = document.querySelector(".upBtn");
var aboutOpen = document.querySelector(".aboutOpen");

/* Remove Loader */
window.onload = setTimeout(() => {
	let loader = document.querySelector("#loader");
	body.classList.toggle("lock");
	loader.classList.add("inactive");
}, 4000);
setTimeout(() => {
	loader.remove();
}, 5000);

/* Up Button */
document.addEventListener("scroll", function () {
	if (pageYOffset >= 100) {
		upBtn.classList.add("active");
	} else {
		upBtn.classList.remove("active");
	}
})

/* Up Button function */
upBtn.onclick = function () {
	document.querySelector("header").scrollIntoView({behavior: 'smooth'})
}

/* Toggle aboutBox */
aboutOpen.onclick = function () {
	this.classList.toggle("active");
}

/* ---- ImgView Close ------ */
function showBoxClose(it) {
	showBox.classList.toggle("active");
	body.classList.toggle("lock");
}

/* ---- ImgView event ------ */
var imgs = document.querySelectorAll(".imgBox");
imgs.forEach(imgBx => {
	imgBx.addEventListener("click", function () {
		let img = imgBx.parentNode.querySelector("img");
		showBoxImg.setAttribute("src", img.getAttribute("src"));
		showBox.classList.add("active");
		body.classList.add("lock");
})
})