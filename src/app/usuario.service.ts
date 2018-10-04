import { Injectable } from '@angular/core'
import Usuario from 'src/domain/usuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    usuarios: Array<Usuario>

    constructor() {
        this.usuarios = []
    }

    crearUsuario(nombre, apellido, username) {
        let usuario = new Usuario(nombre, apellido, username)
        return usuario
    }

    agregarUsuario(usuario) {
        this.usuarios.push(usuario)
    }

    getUsuarioByUsername(username) {
        return this.usuarios.find((usuario) => {
            return usuario.username == username;
        })
    }

}

@Injectable({
    providedIn: 'root'
})
export class StubTareaService extends UsuarioService {
    constructor() {
        super()
    }
}