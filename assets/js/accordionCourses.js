//Function para export para o scripts principal
export function setupAccordionCourses(){
    // Accordion - Courses
    const accordionHeader = document.querySelectorAll(".accordion__header");
    
    accordionHeader.forEach(header =>{
        header.addEventListener("click", () => {
            const accordionItem = header.parentElement;
            const isAccordionActive = accordionItem.classList.contains("active");
    
            // Fecha todos os itens primeiro
            document.querySelectorAll(".accordion__item").forEach(item => {
                item.classList.remove("active");
            });
    
            // Se o clicado não estava ativo, ativa ele
           if(!isAccordionActive){
            accordionItem.classList.add("active");
           }
        });
    });
}

 