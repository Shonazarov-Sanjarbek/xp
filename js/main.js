const sidebar = document.querySelector(".navbar__wrapper")
const btn = document.querySelector(".navbar__burger")
const header = document.querySelector(".header")
const btnTop = document.querySelector(".btn")



window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.classList.add("shrink");
    } else if (window.scrollY <= 0) {
        header.classList.remove("shrink");
        btnTop.style.bottom = "-40px";
    }
    if (window.scrollY > 100) {
        btnTop.style.bottom = "30px";
    }
});



btn.addEventListener("click", ()=>{
    sidebarOpen()
})


function sidebarOpen() {
    sidebar.classList.toggle("navbar__show")
    // let bool = sidebar.classList.contains("navbar__show")
    // if (sidebar.classList.contains("navbar__show")) {
    //     sidebar.classList.remove("navbar__show")
    // }else{
    //     sidebar.classList.add("navbar__show")
    // }
}

