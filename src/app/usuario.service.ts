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
export class StubUsuarioService extends UsuarioService {
    constructor() {
        super()
        let usuario = new Usuario('Kara', 'Danvers', '@kara95');
        usuario.tipoDeUsuario = 'Profesional';
        usuario.email = 'kara@catco.com';
        usuario.agregarAmigo(new Usuario('Timothy', 'Drake', '@theRedOne'));
        usuario.agregarAmigo(new Usuario('Catherine', 'Grant', '@catGrant'));
        usuario.agregarAmigo(new Usuario('Perry', 'White', '@whiteDP'));
        usuario.agregarAmigo(new Usuario('James', 'Gordon', '@jimG'));
        usuario.agregarAmigo(new Usuario('James', 'Olsen', '@jimmy_olsn'));
        usuario.agregarAmigo(new Usuario('Katherine', 'Kane', '@kathyKane'));
        usuario.agregarAmigo(new Usuario('Julia', 'Pennyworth', '@JuliiPen'));
        usuario.agregarAmigo(new Usuario('Jackson', 'Hyde', '@JHyde'));
        usuario.agregarAmigo(new Usuario('Maravilla', 'Martinez', '@SaliDeAhiMaravilla'));
        usuario.agregarAmigo(new Usuario('Marcelo', 'Tinelli', '@marcelotinelli'));
        usuario.agregarAmigo(new Usuario('Carolina', 'Ardohain ', '@pampitaoficial '));
        usuario.agregarAmigo(new Usuario('Sean', 'Penn', '@elmachopenn'));
        usuario.agregarAmigo(new Usuario('Jennifer', 'Lawrence', '@JSLawrence'));
        usuario.agregarAmigo(new Usuario('Carlos', 'Gardel', '@carlitosgardel'));
        usuario.agregarAmigo(new Usuario('Lady', 'Gaga', '@ladygaga'));
        usuario.agregarAmigo(new Usuario('Fernando', 'Dodino', '@dodain'));
        this.agregarUsuario(usuario)
    }
}