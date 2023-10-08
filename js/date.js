var fechaHoraInput = document.getElementById("date");

var fechaHoraActual = new Date();
fechaHoraActual.setHours(fechaHoraActual.getHours() - 6);

fechaHoraInput.max = fechaHoraActual.toISOString().slice(0, 16);

fechaHoraInput.value = fechaHoraActual.toISOString().slice(0, 16);

fechaHoraInput.addEventListener("change", function () {
    var seleccionFechaHora = new Date(fechaHoraInput.value);
    seleccionFechaHora.setHours(seleccionFechaHora.getHours() - 6);

    if (seleccionFechaHora > fechaHoraActual) {
        fechaHoraInput.value = fechaHoraActual.toISOString().slice(0, 16);
    }
});