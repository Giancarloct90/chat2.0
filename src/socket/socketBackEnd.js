const {
    io
} = require('../index');

const {
    Usuarios
} = require('../classes/usuarios');

const {
    crearMensaje
} = require('../utils/utils');

const usuarios = new Usuarios();

io.on('connection', (client) => {
    console.log('Se conecto un cliente');

    // REGISTRAR LOS USUARIOS EN EL SISTEMA
    io.on('entrarChat', (data, fnCallback) => {
        fnCallback(usuarios.agergarUsuarios(client.id, data.nombre));
        io.broadcast.emit('listarUsuarios', usuarios.getUsuarios());
        io.broadcast.emit('crearMensaje', crearMensaje('Admin', `${data.nombre} se acaba de unir al chat`));
    });
});