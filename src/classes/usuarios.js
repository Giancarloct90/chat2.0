class Usuarios {
    constructor() {
        this.usuarios = [];
    }

    // TO ADD USERS
    agergarUsuarios(id, nombre) {
        this.usuarios.push({
            id,
            nombre
        });
        return this.usuarios;
    }

    // GET ONE USER
    getUsuario(id) {
        let usuario = this.usuarios.filter(usuario => usuario.id === id)[0];
        return usuario;
    }

    // GET ALL USERS
    getUsuarios() {
        return this.usuarios;
    }

    // DELETE USERS
    borrarUsuario(id) {
        let usuarioBorrado = this.getUsuario(id);
        this.usuarios = this.usuarios.filter(usuario => usuario.id != id);
        return usuarioBorrado;
    }
}

module.exports = {
    Usuarios
}