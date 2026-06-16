document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const icon = hamburger?.querySelector('i');

    if(hamburger && navLinks) {
        // Abrir y cerrar menú al tocar la hamburguesa
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Cambiar icono: de hamburguesa (tres rayas) a la 'X' para cerrar
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Hacer que el menú se cierre automáticamente cuando tocamos un enlace
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }
});