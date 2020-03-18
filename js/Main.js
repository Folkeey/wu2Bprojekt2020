function menu() {
    let menu = document.querySelector("#menu");
    menu.classList.toggle("show");
}
document.querySelector("#nv").addEventListener("click", menu)