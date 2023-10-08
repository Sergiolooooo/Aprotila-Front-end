const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const alerta = document.getElementById('alerta');

async function showAlert(response) {
    const responseData = await response.json();

    if (responseData.ok) {
        popupImg.src = '../ima/check.png';
        popup.style.background = '#fff';
        alerta.style.color = '#000000';
        alerta.textContent = responseData.msg;
        popup.classList.add('open-popup');
    } else {
        popupImg.src = '../ima/cross.png';
        popup.style.background = '#fff';
        alerta.style.color = '#000000';
        alerta.textContent = responseData.msg;
        popup.classList.add('open-popup');
    }
}

function pick(mensaje) {
    popupImg.src = '../ima/check.png';
    popup.style.background = '#fff';
    alerta.style.color = '#000000';
    alerta.textContent = mensaje;
    popup.classList.add('open-popup');
}

function warning(mensaje) {
    popupImg.src = '../ima/warning.png';
    popup.style.background = '#fff';
    alerta.style.color = '#000000';
    alerta.textContent = mensaje;
    popup.classList.add('open-popup');
}
function errors(mensaje) {
    popupImg.src = '../ima/cross.png';
    popup.style.background = '#fff';
    alerta.style.color = '#000000';
    alerta.textContent = mensaje;
    popup.classList.add('open-popup');
}

function closePopup() {
    popup.classList.remove('open-popup');
    location.reload();
}
