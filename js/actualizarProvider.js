const modalProveedor = new bootstrap.Modal(document.getElementById('modalProveedor'));
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
  const typeProvider = fila.children[0].innerHTML;
  const nameProvider = fila.children[1].innerHTML;
  const direccion = fila.children[2].innerHTML;
  const provincia = fila.children[3].innerHTML;
  const canton = fila.children[4].innerHTML;
  const distrito = fila.children[5].innerHTML;
  const fullName = fila.children[6].innerHTML;
  const typeIdentification = fila.children[7].innerHTML;
  const identification = fila.children[8].innerHTML;
  const telephone = fila.children[9].innerHTML;
  const email = fila.children[10].innerHTML;

  typeProvider_editar.value = typeProvider;
  nameProvider_editar.value = nameProvider;
  direccion_editar.value = direccion;
  provincia_editar.value = provincia;
  habilitarCantonesEditar()
  canton_editar.value = canton;
  habilitarDistritosEditar()
  distrito_editar.value = distrito;
  fullName_editar.value = fullName;
  typeIdentification_editar.value = typeIdentification;
  identification_editar.value = identification;
  telephone_editar.value = telephone;
  email_editar.value = email;
  modalProveedor.show();

  frmActualizarProvider.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`http://localhost:8082/API/provider/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authenticate': localStorage.getItem("authenticate"),
      },
      body: JSON.stringify({
        typeProvider: typeProvider_editar.value,
        nameProvider: nameProvider_editar.value,
        direccion: direccion_editar.value,
        provincia: provincia_editar.value,
        canton: canton_editar.value,
        distrito: distrito_editar.value,
        fullName: fullName_editar.value,
        typeIdentification: typeIdentification_editar.value,
        identification: identification_editar.value,
        telephone: telephone_editar.value,
        email: email_editar.value
      })
    })
      .then(response => response.json())
      .then(response => location.reload());

    modalProveedor.hide();
  });
});
