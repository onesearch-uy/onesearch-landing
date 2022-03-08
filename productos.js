const btn1 = document.getElementById("btn");
const ul1 = document.getElementById("ul-1");
const ul2 = document.getElementById("ul-2");
const ul3 = document.getElementById("ul-3");

const icon1 = document.getElementById("i1");
const icon2 = document.getElementById("i2");
const icon3 = document.getElementById("i3");

function btn(){
    ul1.classList.toggle("active");
    icon1.classList.toggle("active");
}

function btn2(){
    ul2.classList.toggle("active");
    icon2.classList.toggle("active");
}
function btn3(){
    ul3.classList.toggle("active");
    icon3.classList.toggle("active");
}



/*
btn1.addEventListener("click" , () => {
    ul1.classList.toggle("active");
    console.log("Esto funciona")
});*/