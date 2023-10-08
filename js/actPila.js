const modalPila = new bootstrap.Modal(document.getElementById('modalPila'));
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
    const numPila = fila.children[0].innerHTML;
    const observacion = fila.children[1].innerHTML;

    numPila_editar.value = numPila;
    observacion_editar.value = observacion;

    modalPila.show();

    frmActualizarPila.addEventListener('submit', (e) => {
        e.preventDefault();

        fetch(`http://localhost:8082/API/Pila/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authenticate': localStorage.getItem("authenticate"),
            },
            body: JSON.stringify({
                numPila: numPila_editar.value,
                observacion: observacion_editar.value,

            })
        })
            .then(response => response.json())
            .then(response => location.reload());

        modalPila.hide();
    });
});