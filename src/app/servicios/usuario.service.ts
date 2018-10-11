import { Injectable, OnInit } from '@angular/core'
import Usuario from 'src/app/domain/usuario';
import EventoAbierto from '../domain/evento-abierto';
import EventoCerrado from '../domain/evento-cerrado';
import Evento from '../domain/evento';

export interface UsuarioService {

    crearUsuario(nombre, apellido, username)

    agregarUsuario(usuario)

    getUsuarioByUsername(username)

}

@Injectable({
    providedIn: 'root'
})
export class MockUsuarioService implements UsuarioService {

    usuarios: Array<Usuario> = []

    usuarioLogueado: Usuario


    constructor() {
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
        let cumpleKara = new EventoCerrado("Cumple Kara", new Date('2018/10/11 23:59'), new Date('2018/11/8 15:00'), "Mi Casa", "Kara Danvers")
        let cumpleDodain = new EventoCerrado("Cumple Dodain", new Date('2018/10/18 23:59'), new Date('2018/12/7 22:00'), "Lo de Dodino", "Fernando Dodino")
        let salidaBoliche = new EventoCerrado("Salida a bailar", new Date('2018/10/19 00:00'), new Date('2010/10/12 06:00'), "Soul Train", "Cristian Maggiorano")
        usuario.eventos = [cumpleKara, cumpleDodain, salidaBoliche]
        this.agregarUsuario(usuario)
        this.usuarioLogueado = usuario

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

    eventosDeHoy(): Array<Evento> {
        var principioDelDia = new Date()
        var finalDelDia = new Date()
        principioDelDia.setHours(0,0,0,0)
        finalDelDia.setHours(23, 59, 59, 59)
        return this.filtrarEventosPorFechas(this.usuarioLogueado.eventos, principioDelDia, finalDelDia)
    }

    eventosDeEstaSemana(): Array<Evento> {
        var today = new Date()
        var mañana = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 0, 0, 0, 0)
        var semanaQueViene = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7, 23,59,59,59)

        return this.filtrarEventosPorFechas(this.usuarioLogueado.eventos, mañana, semanaQueViene)
    }

    eventosProximos(): Array<Evento> {
        var today = new Date()
        var semanaQueViene = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7, 23, 59, 59, 59)
        return this.usuarioLogueado.eventos.filter(evento => evento.fechaHoraInicio > semanaQueViene )
    }
    

    filtrarEventosPorFechas(eventosAFiltrar: Array<Evento>, fechaDesde, fechaHasta) {
        return eventosAFiltrar.filter(evento => (evento.fechaHoraInicio >= fechaDesde) && (evento.fechaHoraInicio <= fechaHasta))
    }

}