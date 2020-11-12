function aboutToggle() {
    var toggle = document.getElementById("about-angle");
    var about = document.getElementById("about");
    if (toggle.className.indexOf("fa-angle-right") >= 0) {
        toggle.className = "fas fa-angle-down";
        about.classList.add("active");
    } else {
        toggle.className = "fas fa-angle-right";
        about.classList.remove("active");
    }
}

var showBox = document.querySelector("#showBox");
var showBoxImg = showBox.querySelector("img");
var body = document.querySelector("body");

function imgBoxClose(it) {
	let block = it.parentNode.parentNode;
	block.style.visibility = 'hidden';
	block.style.opacity = '0';
	body.classList.remove("lock");
}

var imgs = document.getElementsByClassName("showImg");
for (let i=0; i<imgs.length; i++) {
	imgs[i].addEventListener("click", function () {
		let img = imgs[i].parentNode.querySelector("img");
		showBoxImg.setAttribute("src", img.getAttribute("src"));
		showBox.style.visibility = 'visible';
		showBox.style.opacity = '1';
		body.classList.add("lock");
	})
}