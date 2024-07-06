const sidebar = document.querySelector(".navbar__wrapper")
const btn = document.querySelector(".navbar__burger")



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

