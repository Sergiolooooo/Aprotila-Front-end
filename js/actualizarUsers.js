//Primero de debe declarar una variable
const modalUsers = new bootstrap.Modal(document.getElementById('modalUsers')); //modalUsers se sale del modal en html createUsers
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
  const name = fila.children[0].innerHTML;
  const identification = fila.children[1].innerHTML;
  const telephone = fila.children[2].innerHTML;
  const rol = fila.children[3].innerHTML;
  name_editar.value = name;
  identification_editar.value = identification;
  telephone_editar.value = telephone;
  rol_editar.value = rol;

  modalUsers.show();
 // frmActualizarUsers, se declara dentro del modal para llamar los campos junto xon el boton para el evento submit
  frmActualizaUsers.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`http://localhost:8082/API/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authenticate': localStorage.getItem("authenticate"),
      },
      body: JSON.stringify({
        name: name_editar.value,
        identification: identification_editar.value,
        telephone: telephone_editar.value,
        rol: rol_editar.value,
      })
    })
      .then(response => response.json())
      .then(response => location.reload());

      modalUsers.hide();
  });
});
