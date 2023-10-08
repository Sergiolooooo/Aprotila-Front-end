const modalMortalidad = new bootstrap.Modal(document.getElementById('modalMortalidad'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    fecha_editar.value = fila.children[0].innerHTML
    encargado_editar.value = fila.children[1].innerHTML
    numPila_editar.value = fila.children[2].innerHTML
    muertes_editar.value = fila.children[3].innerHTML
    observation_editar.value = fila.children[4].innerHTML
    modalMortalidad.show()
})