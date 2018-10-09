import Evento from "./evento";

export default class Usuario {
    nombre;
    apellido;
    username;
    tipoDeUsuario;
    email;
    public amigos: Array<Usuario> = [];
    public eventos: Array<Evento> = [];

    constructor(nombre, apellido, username) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
    }

    eliminarAmigo(usuario: Usuario) {
        const index = this.amigos.indexOf(usuario, 0);

        if (index > -1) {
            this.amigos.splice(index, 1);
        }
    }

    agregarAmigo(usuario: Usuario) {
        this.amigos.push(usuario);
    }

}