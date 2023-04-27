const hamburger = document.querySelector(".navbar-hamburger");
const aside = document.querySelector(".aside");
const asideClose = document.querySelector(".aside-close");

console.log(hamburger, aside, asideClose)

hamburger.addEventListener("click", () => {
    aside.dataset.active = true
})

asideClose.addEventListener("click", () => {
    aside.dataset.active = false
})
