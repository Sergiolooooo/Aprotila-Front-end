//cargar los productos en el modulo insumos
const selectElementProduct = document.getElementById('product');
const selectElementProductEditar = document.getElementById('product_editar');

fetch('http://localhost:8082/API/Products', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'authenticate': localStorage.getItem("authenticate"),
  }
})
.then(response => response.json())
.then(data => {
  const inventories = data.inventories;

  inventories.forEach(inventoryItem => {
    const products = inventoryItem.products;
    products.forEach(product => {
      const option = document.createElement('option');
      const optionEditar = document.createElement('option');

      option.setAttribute('inventory_id', inventoryItem._id);
      optionEditar.setAttribute('inventory_id', inventoryItem._id);
      option.setAttribute('product_id', product._id);
      optionEditar.setAttribute('product_id', product._id);

      option.value = product.product;
      optionEditar.value = product.product;
      option.textContent = product.product;
      optionEditar.textContent = product.product;
      selectElementProduct.appendChild(option);
      selectElementProductEditar.appendChild(optionEditar);
    });
  });

})
.catch(error => {
  console.error('Error al obtener los productos:', error);
});

