function classToggle(item, c1, c2="") {
		if (c1 && c2) {		
			if (item.className.indexOf(c1) >= 0) {
				item.className = item.className.replace(c1, c2);
			} else {
				item.className = item.className.replace(c2, c1);
			}

	} else {
		if (item.className.indexOf(c1 || c2) >= 0) {
			item.className = item.className.replace(c1 || c2, "");
		}
	}
}

/* Varables */
var body = document.querySelector("body");
var showBox = document.querySelector("#showBox");
var showBoxImg = showBox.querySelector("img");

/* Remove Loader */
var t = window.onload = setInterval(function() {
	document.querySelector("#loader").remove();
	classToggle(body, "lock");
	clearInterval(t)
}, 3500)

/* Toggle aboutBox */
function aboutToggle() {
    var toggle = document.querySelector("#about-angle");
    var about = document.querySelector("#about");
    if (toggle.className.indexOf("fa-angle-right") >= 0) {
        classToggle(toggle, "fa-angle-right", "fa-angle-down");
        about.classList.add("active");
    } else {
        classToggle(toggle, "fa-angle-right", "fa-angle-down");
        classToggle(about, "active");
    }
}

/* ---- ImgView Close ------ */
function showBoxClose(it) {
	classToggle(showBox, "active");
	classToggle(body, "lock");
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