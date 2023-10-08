// Obtén todos los elementos de los divs con la clase "miDiv"
const divElements = document.querySelectorAll('.miDiv');

// Itera sobre cada div y agrega el evento de clic
divElements.forEach(function(divElement) {
  divElement.addEventListener('click', function() {
    // Obtén el enlace específico para cada div
    const link = divElement.getAttribute('data-link');
    
    // Cambia la ubicación del navegador al enlace correspondiente
    window.location.href = link;
  });
});



