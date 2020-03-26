function hamburger(){
    var menu = document.querySelector("#nv")
    menu.classList.toggle("show")
    var btn = document.querySelector(".button")
    btn.classList.toggle("animate")
};
    var btn = document.querySelector(".button")
    btn.addEventListener("click",hamburger)