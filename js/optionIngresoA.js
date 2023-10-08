const selectElementProveedor = document.getElementById('provider');
const selectElementEditarProveedor = document.getElementById('provider_editar');

fetch('http://localhost:8082/API/provider', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'authenticate': localStorage.getItem("authenticate"),
  }
})
  .then(response => response.json())
  .then(data => {
    const mortalidad = data.provider; // Ajusta la propiedad 'mortalidad' según la estructura de los datos

    mortalidad.forEach(muerte => {
      const option = document.createElement('option');
      const optionEdit = document.createElement('option');
      option.value = muerte.nameProvider;
      optionEdit.value = muerte.nameProvider;
      option.textContent = muerte.nameProvider;
      optionEdit.textContent = muerte.nameProvider;
      selectElementProveedor.appendChild(option);
      selectElementEditarProveedor.appendChild(optionEdit);
    });
  })
  .catch(error => {
    console.error('Error al obtener el Proveedor:', error);
  });

  
// const selectElementEditarProveedor = document.getElementById('provider_editar');

// fetch('http://localhost:8082/API/provider', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     'authenticate': localStorage.getItem("authenticate"),
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     const pilas = data.provider; // Ajusta la propiedad 'mantePila' según la estructura de los datos

//     pilas.forEach(pila => {
//       const option = document.createElement('option');
//       option.value = pila.nameProvider;
//       option.textContent = pila.nameProvider;
//       selectElementEditarProveedor.appendChild(option);
//     });
//   })
//   .catch(error => {
//     console.error('Error al obtener las pilas:', error);
//   });
    