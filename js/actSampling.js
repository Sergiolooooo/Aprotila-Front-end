const modalSampling = new bootstrap.Modal(document.getElementById('modalSampling'));
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
  const amount = fila.children[2].innerHTML;
  const averageWeight = fila.children[3].innerHTML;
  const observation = fila.children[6].innerHTML;
  amount_editar.value = amount;
  averageWeight_editar.value = averageWeight;
  observation_editar.value = observation;
  modalSampling.show();

  frmActualizarSampling.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`http://localhost:8082/API/Sampling/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authenticate': localStorage.getItem("authenticate"),
      },
      body: JSON.stringify({
        amount:  amount_editar.value,
        averageWeight: averageWeight_editar.value,
        observation: observation_editar.value,

      })
    })
      .then(response => response.json())
      .then(response => location.reload());

    modalAlumno.hide();
  });
});
