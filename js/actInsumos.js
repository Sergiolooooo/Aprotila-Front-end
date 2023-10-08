const modalInsumos = new bootstrap.Modal(document.getElementById('modalInsumo'));
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
    const date = fila.children[0].innerHTML;
    const employee = fila.children[1].innerHTML;
    const numPila = fila.children[2].innerHTML;
    const product = fila.children[3].innerHTML;
    const amountProduct = fila.children[4].innerHTML;
    const unity = fila.children[5].innerHTML;
    const observacion = fila.children[6].innerHTML;


    date_editar.value = date;
    employee_editar.value = employee;
    numPila_editar.value = numPila;
    product_editar.value = product;
    amountProduct_editar.value = amountProduct;
    unity_editar.value = unity;
    observacion_editar.value = observacion;
    console.log(amountProduct_editar.value);

    modalInsumos.show();

    frmActualizarInsumo.addEventListener('submit', (e) => {
        e.preventDefault();

        //obtenmos los Id del producto seleccionado
        const selectElement = document.getElementById('product_editar');
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        const insumoProduct_id = selectedOption.getAttribute('product_id');
        const insumoProductInventory_id = selectedOption.getAttribute('inventory_id');


        const updateInsumo = async () => {
            try {
                const responseUpdate = await fetch(`http://localhost:8082/API/SuppliesFish/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'authenticate': localStorage.getItem("authenticate"),
                    },
                    body: JSON.stringify({
                        date: date_editar.value,
                        employee: employee_editar.value,
                        numPila: numPila_editar.value,
                        product_id: insumoProduct_id,
                        inventory_id: insumoProductInventory_id,
                        amountProduct: amountProduct_editar.value,
                        unity: unity_editar.value,
                        observacion: observacion_editar.value
                    })
                });

                const responseDataUpdate = await responseUpdate.json();

                if (responseUpdate.ok) {
                    alert("se actualizo correctamente");
                    location.reload();
                } else {
                    console.log(responseDataUpdate);
                }

                modalInsumos.hide();
            } catch (error) {
                console.error('Error al actualizar el insumo:', error);
            }
        };

        // Llamar a la función discountAndUpdateInsumo
        updateInsumo();

    });


});