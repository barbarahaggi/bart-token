 // Adiciona um evento de clique a cada link na barra de navegação
 var navLinks = document.querySelectorAll('.nav-bar a');
 for (var i = 0; i < navLinks.length; i++) {
     navLinks[i].addEventListener('click', scrollToSection);
 }

 // Função para rolar para a seção correspondente quando um link é clicado
 function scrollToSection(event) {
     event.preventDefault();
     var targetId = this.getAttribute('href');
     var targetPosition = document.querySelector(targetId).offsetTop;
     window.scrollTo({
         top: targetPosition,
         behavior: 'smooth'
     });
 }

 var hamburger = document.querySelector('.hamburger');
    var navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });