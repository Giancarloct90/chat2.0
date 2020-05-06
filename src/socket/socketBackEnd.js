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

    //REGISTRAR LOS USUARIOS EN EL SISTEMA
    client.on('entrarChat', (data, fnCallback) => {
        fnCallback(usuarios.agergarUsuarios(client.id, data.nombre));
        client.broadcast.emit('listarUsuarios', usuarios.getUsuarios());
        client.broadcast.emit('crearMensaje', crearMensaje('Admin', `${data.nombre} se acaba de unir al chat`));
    });

    // USUARIO DESCONECTADO
    client.on('disconnect', () => {
        let usuarioBorrada = usuarios.borrarUsuario(client.id);
        client.broadcast.emit('crearMensaje', crearMensaje('Admin', `${usuarioBorrada.nombre} abandono el chat`));
        client.broadcast.emit('listarUsuarios', usuarios.getUsuarios());
    });
});