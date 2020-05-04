class Usuarios {
    constructor() {
        this.usuarios = [];
    }

    // TO ADD USERS
    agergarUsuarios(id, nombre) {
        this.usuarios({
            id,
            nombre
        });
        return this.usuarios;
    }

    // GET ONE USER
    getUsuario(id) {
        let usuario = this.usuarios.filter(usuario => usuario.id === id);
        return usuario;
    }

    // GET ALL USERS
    getUsuarios() {
        return this.usuarios;
    }

    // DELETE USERS
    borrarUsuario(id) {
        let usuarioBorrado = this.getUsuario(id);
        let usuarios = this.usuarios.filter(usuario => usuario.id != id);
        return usuarioBorrado;
    }
}

module.exports = {
    Usuarios
}