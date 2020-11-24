/* Varables */
var body = document.querySelector("body");
var showBox = document.querySelector("#showBox");
var showBoxImg = showBox.querySelector("img");
var upBtn = document.querySelector(".upBtn");

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
	document.querySelector("#up").scrollIntoView({behavior: 'smooth'})
}

/* Toggle aboutBox */
function aboutToggle() {
    var toggle = document.querySelector("#about-angle");
    var about = document.querySelector("#about");
    if (toggle.className.indexOf("fa-angle-right") >= 0) {
        classToggle(toggle, "fa-angle-right", "fa-angle-down");
        about.classList.add("active");
    } else {
        classToggle(toggle, "fa-angle-right", "fa-angle-down");
        about.classList.toggle("active");
    }
}

/* ---- ImgView Close ------ */
function showBoxClose(it) {
	showBox.classList.toggle("active");
	body.classList.toggle("lock");
}

/* ---- ImgView event ------ */
var imgs = document.querySelectorAll(".showImg");
imgs.forEach(imgBx => {
	imgBx.addEventListener("click", function () {
		let img = imgBx.parentNode.querySelector("img");
		showBoxImg.setAttribute("src", img.getAttribute("src"));
		showBox.classList.add("active");
		body.classList.add("lock");
})
})


function classToggle(item, c1, c2) {
	if (item.className.indexOf(c1) >= 0) {
		item.className = item.className.replace(c1, c2);
	} else {
		item.className = item.className.replace(c2, c1);
	}
}
