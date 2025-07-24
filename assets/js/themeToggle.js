//Function para export para o scripts principal
export function setupThemeToggle (){
    // Mundar o tema da tela dark/leght
    const toggleTheme = document.getElementById("toggleTheme");
    const headerBrand = document.getElementById("headerBrand");
    const rootHtml = document.documentElement;
    
    // Criando a variavel para pega o tema salvo 
    const savedTheme = localStorage.getItem("theme");
    
    // Se existir um tema salvo, aplica ele na página 
    if(savedTheme){
        rootHtml.setAttribute("data-theme", savedTheme);
        headerBrand.setAttribute("src", savedTheme === "dark" ? "./assets/images/faviconHome/icon-dark.png" : "./assets/images/faviconHome/icon-light.png");
    
        // Define ícone correto no button
        if(savedTheme === "dark"){
            toggleTheme.classList.remove("bi-brightness-high");
            toggleTheme.classList.add("bi-moon-stars");
        }else{
            toggleTheme.classList.remove("bi-moon-stars");
            toggleTheme.classList.add("bi-brightness-high");
        }
    }
    
    // Mudar o Tema
    function changeTheme(){
        const currentTheme = rootHtml.getAttribute("data-theme");
    
        if(currentTheme === "dark"){
            rootHtml.setAttribute("data-theme", "light");
            headerBrand.setAttribute("src","./assets/images/faviconHome/icon-light.png");
            localStorage.setItem("theme", "light");
        }else{
            rootHtml.setAttribute("data-theme", "dark");
            headerBrand.setAttribute("src","./assets/images/faviconHome/icon-dark.png");
            localStorage.setItem("theme", "dark");
        }
    
        toggleTheme.classList.toggle("bi-brightness-high");
        toggleTheme.classList.toggle("bi-moon-stars");
    
    }
    
    toggleTheme.addEventListener("click", changeTheme);

}

