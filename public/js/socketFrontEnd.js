// conesta linea obtnemos las variables que viene en el url para saber si vienen las que ocupamos
var params = new URLSearchParams(window.location.search);

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
    });
});

// CUANDO SE DESCONECTA DEL SEVIDOR
socket.on('disconnect', function () {
    console.log('Perdimos conexion con el servidor')
});

// LISTAR Y RENDERIZAR LISTA DE USUARIOS
socket.on('listarUsuarios', function (resp) {
    console.log('Usuarios online');
    console.log(resp);
});

// ONTENER EL MSJ
socket.on('crearMensaje', function (resp) {
    console.log(resp);
});