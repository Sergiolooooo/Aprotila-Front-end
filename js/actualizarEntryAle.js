const modalAlumno = new bootstrap.Modal(document.getElementById('modalAlumno'));
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
  const provider = fila.children[1].innerHTML;
  const loteProvider = fila.children[2].innerHTML;
  const pilaProvider = fila.children[3].innerHTML;
  const pilaEntry = fila.children[5].innerHTML;
  const batch = fila.children[6].innerHTML;
  const typeFish = fila.children[7].innerHTML;
  const cantidad = fila.children[8].innerHTML;
  provider_editar.value = provider;
  loteProvider_editar.value = loteProvider;
  pilaProvider_editar.value = pilaProvider;
  numPila_editar.value = pilaEntry;
  batch_editar.value = batch;
  typeFish_editar.value = typeFish;
  cantidad_editar.value = cantidad;
  modalAlumno.show();

  frmActualizarEntry.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`http://localhost:8082/API/entryalevines/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authenticate': localStorage.getItem("authenticate"),
      },
      body: JSON.stringify({
        provider: provider_editar.value,
        loteProvider: loteProvider_editar.value,
        pilaProvider: pilaProvider_editar.value,
        pilaEntry: numPila_editar.value,
        batch: batch_editar.value,
        typeFish: typeFish_editar.value,
        cantidad: cantidad_editar.value
      })
    })
      .then(response => response.json())
      .then(response => location.reload());

    modalAlumno.hide();
  });
});
