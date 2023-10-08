const modalSalesProduct = new bootstrap.Modal(document.getElementById('modalSaleProduct'));
const on = (element, event, selector, handler) => {
  element.addEventListener(event, e => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

on(document, 'click', '.btnEditar', e => {
  const fila = e.target.parentNode.parentNode;
  const id = fila.getAttribute("id"); // Obtener el valor del atributo "data-id"
  const tipo = fila.children[1].innerHTML;
  const cantidad = fila.children[2].innerHTML;
  const observacion = fila.children[3].innerHTML;

  typeProduct_editar.value = tipo;
  amountProduct_editar.value = cantidad;
  observation_editar.value = observacion;

  modalSalesProduct.show();

  saleProduct_form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`http://localhost:8082/API/saleProduct/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authenticate': localStorage.getItem("authenticate"),
      },
      body: JSON.stringify({
        typeProduct: typeProduct_editar.value,
        amount: amountProduct_editar.value,
        observation: observation_editar.value
      })
    })
      .then(response => response.json())
      .then(response => location.reload());

      modalSalesProduct.hide();
  });
});