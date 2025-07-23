const abrir = document.querySelector("#abrir");
const nav = document.querySelector("#nav");
const header = document.querySelector("#header");
const cerrar = document.querySelector("#cerrar");
const body = document.querySelector('#body');

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})
/// esto es para que el menu se cierre cuando se elija una opción
const menuLinks = document.querySelectorAll('.nav-list a[href^=\"#\"]');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry)=>{
            const id = entry.target.getAttribute("id");
            const menuLink = document.querySelector(`.nav-list a[href="#${id}"]`);

            if (entry.isIntersecting){
                document.querySelector(".nav-list a.selected").classList.remove("selected");
            }
        });
    },
    { rootMargin: "-50% 0px -50% 0px"}
);

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
        nav.classList.remove("visible");
    })
})

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if(scrolled > 150){
        header.classList.add('toggleBg');
    }else{
        header.classList.remove('toggleBg')
    }
});


