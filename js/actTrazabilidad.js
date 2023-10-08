const modalTraceability = new bootstrap.Modal(document.getElementById('modalTraceability'));
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
    const batch = fila.children[3].innerHTML;
    const typeFish = fila.children[5].innerHTML;
    batchEdit.value = batch;
    editTypeFish.value = typeFish;
    modalTraceability.show();

    frmActualizarTraceability.addEventListener('submit', (e) => {
        e.preventDefault();

        fetch(`http://localhost:8082/API/Traceability/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authenticate': localStorage.getItem("authenticate"),
            },
            body: JSON.stringify({
                batch: batchEdit.value,
                typeFish: editTypeFish.value

            })
        })
            .then(response => response.json())
            .then(response => location.reload());

        modalTraceability.hide();
    });
});