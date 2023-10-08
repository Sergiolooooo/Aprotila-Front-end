const modalVentas = new bootstrap.Modal(document.getElementById('modalVentas'));
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
  const cliente = fila.children[9].innerHTML;
  const telefono = fila.children[10].innerHTML;
  const tipoPago = fila.children[11].innerHTML;

 
  customer_editar.value = cliente;
  number_editar.value = telefono;
  pay_editar.value = tipoPago;

  modalVentas.show();

  // funcion para calcular inpuesto en el modal
  // function calcularTotalEditar() {
  //   var selectedOption = typeProduct_editar.value;

  //   if (selectedOption === 'Tilapia Entera') {
  //     iva = 0.01;
  //   } else if (selectedOption !== 'Tilapia Entera') {
  //     iva = 0.13;
  //   }
  //   var price = parseFloat(price_editar.value);
  //   var weight = parseFloat(weight_editar.value);
  //   var total = weight * price;
  //   var iv = total * iva;
  //   var totalConIV = total + iv;

  //   total_editar.value = totalConIV.toFixed(2);
  // }
  // weight_editar.addEventListener('input', calcularTotalEditar);
  // price_editar.addEventListener('input', calcularTotalEditar);

  frmActualizarVentas.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`http://localhost:8082/API/Sales/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authenticate': localStorage.getItem("authenticate"),
      },
      body: JSON.stringify({
        customer: customer_editar.value,
        number: number_editar.value,
        pay: pay_editar.value
      })
    })
      .then(response => response.json())
      .then(response => location.reload());

    modalVentas.hide();
  });
});

