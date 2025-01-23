document.addEventListener("DOMContentLoaded", function () {  
    const services = document.querySelectorAll('.service');  
    
    services.forEach(service => {  
        service.addEventListener('mouseenter', () => {  
            service.style.transform = "scale(1.05)";  
        });  
        service.addEventListener('mouseleave', () => {  
            service.style.transform = "scale(1)";  
        });  
    });  
});  