const slide = document.querySelector(".switch-btn");
const icon = document.querySelector("#icon");
const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu-list");
let slider = document.querySelector(".slider");
let load = document.getElementById("loader");

window.addEventListener("load", function(){
		load.style.display = "none";
	});

slide.onclick = ()=>{
    slide.classList.toggle("active");
    document.body.classList.toggle("darkmode");
    if(slide.classList.contains("active")){
        icon.src = "sun.png"
    }
    else{
        icon.src = "moon.png"
    }
}

toggle.addEventListener("click", ()=>{
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
})

