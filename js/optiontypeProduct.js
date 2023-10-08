const selectElementProducts = document.getElementById('typeProduct');
const selectElementEditarProducts = document.getElementById('typeProduct_editar');

fetch('http://localhost:8082/API/saleProduct', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'authenticate': localStorage.getItem("authenticate"),
  }
})
  .then(response => response.json())
  .then(data => {
    const mortalidad = data.saleProduct;

    mortalidad.forEach(muerte => {
      const option = document.createElement('option');
      const optionEditar = document.createElement('option');
      option.value = muerte.typeProduct;
      optionEditar.value = muerte.typeProduct;
      option.textContent = muerte.typeProduct;
      optionEditar.textContent = muerte.typeProduct;
      option.setAttribute('saleProduct_id', muerte._id);
      optionEditar.setAttribute('saleProduct_id', muerte._id);
      selectElementProducts.appendChild(option);
      selectElementEditarProducts.appendChild(optionEditar);
    });
  })
  .catch(error => {
    console.error('Error al obtener la mortalidad:', error);
  });
