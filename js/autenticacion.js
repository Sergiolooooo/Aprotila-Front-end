//al cargar la pagina verifica si está autenticado
document.addEventListener('DOMContentLoaded', function () {
    
    if (!Autenticado()) {
        // Redirige al usuario a la página de inicio de sesión
        window.location.replace('./login.html');
    } else {
        obtenerUsuario()
        // mostrarContenidoProtegido();
        // Continúa con el código para mostrar la página principal
    }
});

function Autenticado() {
    const token = localStorage.getItem('authenticate');
    // Comprueba si el token existe y no está vacío
    return (token && token !== '') 
}

function CerrarSesion() {
    localStorage.removeItem('authenticate');
    window.location.replace('./login.html');
}

function obtenerUsuario() {
    const token = localStorage.getItem('authenticate');
    const payload = token.split('.')[1]; // Obtiene el segundo componente del token (payload)
    const decodedPayload = atob(payload); // Decodifica el payload codificado en Base64
    const parsedPayload = JSON.parse(decodedPayload); // Parsea el resultado de la decodificación de Base64
    // console.log(parsedPayload); // Muestra el payload parseado en la consola
    return parsedPayload;
   
}