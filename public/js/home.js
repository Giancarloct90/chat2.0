// VAR/SELECTOR
const btnIngresar = document.getElementById('btnIngresar');
const txtNombre = document.getElementById('txtNombre');
const lblNorify = document.getElementById('lblNorify');

// EVENTSLISTENERS
btnIngresar.addEventListener('click', function () {
    if (!txtNombre.value) {
        lblNorify.innerHTML = 'El Nombre de usuario es obligatorio'
        lblNorify.style.display = '';
        return;
    }
    lblNorify.style.display = 'none';
    window.location.replace(`/chat?nombre=${txtNombre.value}`);
});

// FUNCTIONS