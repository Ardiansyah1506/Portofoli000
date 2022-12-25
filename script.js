let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})


VanillaTilt.init(document.querySelectorAll('.box'), {
    max: 25,
    scale: 1.1
});

var text = "Ardiansyah";
var index = 0;
var a = 0;


a++;

function type() {
    document.getElementById("text").innerHTML += text.charAt(index);
    index++;
    if (index > text.length - 1) {
        clearInterval(typingInterval);
    }

}
var typingInterval = setInterval(type, 500)