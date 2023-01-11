// toggle to shwo the nav link

const navLink = document.querySelector(".nav__link");
const box = document.querySelector(".box");

console.log(box)

box.addEventListener('click', () => {
    navLink.classList.toggle('active');
    document.querySelector(".lign").classList.toggle("active");
})