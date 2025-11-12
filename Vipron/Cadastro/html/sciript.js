// Cria o observer para detectar quando o banner entra na tela
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Alterna a direção de acordo com o índice do banner
      if (index % 2 === 0) {
        entry.target.classList.add('visible-left'); // Vem da esquerda
      } else {
        entry.target.classList.add('visible-right'); // Vem da direita
      }
      // Desobserva o banner após a animação
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.90 // Quando 50% do banner aparecer na tela
});

// Observa todos os banners
document.querySelectorAll('.banner3').forEach(banner => {
  observer.observe(banner);
});















