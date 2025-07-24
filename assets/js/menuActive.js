//Function para export para o scripts principal
export function setupMenuActive (){
    // Menu Activo 
    const menuLinks = document.querySelectorAll(".menu__link");
    
    menuLinks.forEach(link =>{
        link.addEventListener("click", () => {
            menuLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active")
        });
    });
}
