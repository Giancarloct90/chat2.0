// VAR/SELECTOR
const btnEnviar = document.getElementById('btnEnviar');
const txtMsj = document.getElementById('txtMsj');

// conesta linea obtnemos las variables que viene en el url para saber si vienen las que ocupamos
var params = new URLSearchParams(window.location.search);


// EVENTS LISTENERS
btnEnviar.addEventListener('click', function () {
    if (!txtMsj.value) {
        alert('El campo de mensaje no puede ir vacio');
    }
    socket.emit('crearMensaje', txtMsj.value, function (resp, flag) {
        renderizarMensaje(resp, flag);
        txtMsj.value = '';
    });

});

if (!params.get('nombre')) {
    window.location.replace('/');
    throw new Error('El nombre es necesario');
}

var usuario = {
    nombre: params.get('nombre')
}

const socket = io();

// ESPERANDO CONECTARSE CON EL SERVER
socket.on('connect', function () {
    console.log('Connect server');
    socket.emit('entrarChat', usuario, function (resp) {
        console.log(resp);
        renderizarUsuarios(resp);
        scrollBottom();
    });
});

// CUANDO SE DESCONECTA DEL SEVIDOR
socket.on('disconnect', function () {
    console.log('Perdimos conexion con el servidor')
});

// LISTAR Y RENDERIZAR LISTA DE USUARIOS
socket.on('listarUsuarios', function (resp) {
    renderizarUsuarios(resp);
});

// ONTENER EL MSJ
socket.on('crearMensaje', function (resp) {
    renderizarMensaje(resp);
    scrollBottom();
});