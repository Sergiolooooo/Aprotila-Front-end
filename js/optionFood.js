const selectElement = document.getElementById('numPila');
const selectElementEditar = document.getElementById('numPila_editar');

fetch('http://localhost:8082/API/Pila', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'authenticate': localStorage.getItem("authenticate"),
  }
})
  .then(response => response.json())
  .then(data => {
    const mortalidad = data.mantePila; // Ajusta la propiedad 'mortalidad' según la estructura de los datos

    mortalidad.forEach(muerte => {
      const option = document.createElement('option');
      const optionEditar = document.createElement('option');
      option.value = muerte.numPila;
      optionEditar.value = muerte.numPila;
      option.textContent = muerte.numPila;
      optionEditar.textContent = muerte.numPila;
      selectElement.appendChild(option);
      selectElementEditar.appendChild(optionEditar);
    });
  })
  .catch(error => {
    console.error('Error al obtener las pilas', error);
  });