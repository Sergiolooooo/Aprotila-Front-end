const selectElementProveedor = document.getElementById('provider');
// const selectElementEditarProveedor = document.getElementById('provider_editar');

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
      // const optionEditar = document.createElement('option');
      option.value = muerte.nameProvider;
      // optionEditar.value = muerte.nameProvider;
      option.textContent = muerte.nameProvider;
      // optionEditar.textContent = muerte.nameProvider;
      selectElementProveedor.appendChild(option);
      // selectElementEditarProveedor.appendChild(optionEditar);
    });
  })
  .catch(error => {
    console.error('Error al obtener el Proveedor:', error);
  });

  const EditElementProveedor = document.getElementById('provider_editar');
// const selectElementEditarProveedor = document.getElementById('provider_editar');

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
      // const optionEditar = document.createElement('option');
      option.value = muerte.nameProvider;
      // optionEditar.value = muerte.nameProvider;
      option.textContent = muerte.nameProvider;
      // optionEditar.textContent = muerte.nameProvider;
      EditElementProveedor.appendChild(option);
      // selectElementEditarProveedor.appendChild(optionEditar);
    });
  })
  .catch(error => {
    console.error('Error al obtener el Proveedor:', error);
  });

  
