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

const textElement = document.getElementById('text');
let index = 0;
const messages = [
    'Ardiansyah'

];

function type() {
    textElement.innerHTML += messages[index][textElement.innerHTML.length];
    if (textElement.innerHTML.length === messages[index].length) {
        clearInterval(interval);
        setTimeout(() => {
            interval = setInterval(backspace, 100);
        }, 2000);
    }
}

function backspace() {
    textElement.innerHTML = textElement.innerHTML.substring(0, textElement.innerHTML.length - 1);
    if (textElement.innerHTML.length === 0) {
        clearInterval(interval);
        index = index === messages.length - 1 ? 0 : index + 1;
        interval = setInterval(type, 150);
    }
}

let interval = setInterval(type, 150);
