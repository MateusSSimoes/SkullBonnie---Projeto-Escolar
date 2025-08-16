// Seleciona o hambúrguer e o menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Adiciona o evento de clique
hamburger.addEventListener('click', () => {
  // Alterna a classe 'show' para mostrar/esconder o menu
  navLinks.classList.toggle('show');
  
  // Alterna a classe 'active' para animar o hambúrguer (virar X)
  hamburger.classList.toggle('active');
});

