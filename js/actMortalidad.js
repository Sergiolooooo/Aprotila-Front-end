const modalMortalidad = new bootstrap.Modal(document.getElementById('modalMortalidad'));
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
  const numPila = fila.children[1].innerHTML;
  const cantidadMuertas = fila.children[2].innerHTML;
  const observacion = fila.children[4].innerHTML;

  numPila_editar.value = numPila;
  cantidad_editar.value = cantidadMuertas;
  observacion_editar.value = observacion;

  modalMortalidad.show();

  frmActualizarMortalidad.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`http://localhost:8082/API/mortality/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authenticate': localStorage.getItem("authenticate"),
      },
      body: JSON.stringify({
        numPila: numPila_editar.value,
        cantidadMuertas: cantidad_editar.value,
        observacion: observacion_editar.value,

      })
    })
      .then(response => response.json())
      .then(response => location.reload());

    modalMortalidad.hide();
  });
});