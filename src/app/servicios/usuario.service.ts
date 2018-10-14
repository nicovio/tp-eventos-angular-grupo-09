import { Injectable, OnInit } from '@angular/core'
import Usuario from 'src/app/domain/usuarios/usuario';
import EventoAbierto from '../domain/eventos/evento-abierto';
import EventoCerrado from '../domain/eventos/evento-cerrado';
import Evento from '../domain/eventos/evento';
import Locacion from '../domain/eventos/locacion';
import { Profesional } from '../domain/usuarios/profesional';
import { Invitacion } from '../domain/eventos/invitacion';

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
        let karaDanvers = new Usuario('Kara', 'Danvers', '@kara95');
        let fernandoDodino = new Usuario('Fernando', 'Dodino', '@dodain');
        let cristianMaggiorano = new Usuario('Cristian', 'Maggiorano', '@crismagg');
        karaDanvers.tipoDeUsuario = new Profesional
        karaDanvers.email = 'kara@catco.com';
        karaDanvers.agregarAmigo(new Usuario('Timothy', 'Drake', '@theRedOne'));
        karaDanvers.agregarAmigo(new Usuario('Catherine', 'Grant', '@catGrant'));
        karaDanvers.agregarAmigo(new Usuario('Perry', 'White', '@whiteDP'));
        karaDanvers.agregarAmigo(new Usuario('James', 'Gordon', '@jimG'));
        karaDanvers.agregarAmigo(new Usuario('James', 'Olsen', '@jimmy_olsn'));
        karaDanvers.agregarAmigo(new Usuario('Katherine', 'Kane', '@kathyKane'));
        karaDanvers.agregarAmigo(new Usuario('Julia', 'Pennyworth', '@JuliiPen'));
        karaDanvers.agregarAmigo(new Usuario('Jackson', 'Hyde', '@JHyde'));
        karaDanvers.agregarAmigo(new Usuario('Maravilla', 'Martinez', '@SaliDeAhiMaravilla'));
        karaDanvers.agregarAmigo(new Usuario('Marcelo', 'Tinelli', '@marcelotinelli'));
        karaDanvers.agregarAmigo(new Usuario('Carolina', 'Ardohain ', '@pampitaoficial '));
        karaDanvers.agregarAmigo(new Usuario('Sean', 'Penn', '@elmachopenn'));
        karaDanvers.agregarAmigo(new Usuario('Jennifer', 'Lawrence', '@JSLawrence'));
        karaDanvers.agregarAmigo(new Usuario('Carlos', 'Gardel', '@carlitosgardel'));
        karaDanvers.agregarAmigo(new Usuario('Lady', 'Gaga', '@ladygaga'));
        karaDanvers.agregarAmigo(cristianMaggiorano);
        karaDanvers.agregarAmigo(fernandoDodino);
        let cumpleKara = new EventoCerrado("Cumple Kara", new Date('2018/10/11 23:59'), new Date('2018/11/8 15:00'), new Locacion("Mi Casa"), karaDanvers)
        let cumpleDodain = new EventoCerrado("Cumple Dodain", new Date('2018/10/18 23:59'), new Date('2018/12/7 22:00'), new Locacion("Lo de Dodino"), fernandoDodino)
        let salidaBoliche = new EventoAbierto("Salida a bailar", new Date('2018/10/19 00:00'), new Date('2010/10/12 06:00'), new Locacion("Soul Train"), cristianMaggiorano, 50)
        let invitacionCumpleDodino = new Invitacion(cumpleDodain, 2) 
        karaDanvers.invitaciones = [invitacionCumpleDodino, new Invitacion(cumpleKara,5), new Invitacion(salidaBoliche,10) ]
        karaDanvers.aceptarInvitacion(invitacionCumpleDodino)
        // karaDanvers.eventos = [cumpleKara, cumpleDodain, salidaBoliche]
        this.agregarUsuario(karaDanvers)
        this.usuarioLogueado = karaDanvers
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
        principioDelDia.setHours(0, 0, 0, 0)
        finalDelDia.setHours(23, 59, 59, 59)
        return this.filtrarEventosPorFechas(this.usuarioLogueado.todosLosEventos(), principioDelDia, finalDelDia)
    }

    eventosDeEstaSemana(): Array<Evento> {
        var today = new Date()
        var mañana = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 0, 0, 0, 0)
        var semanaQueViene = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7, 23, 59, 59, 59)

        return this.filtrarEventosPorFechas(this.usuarioLogueado.todosLosEventos(), mañana, semanaQueViene)
    }

    eventosProximos(): Array<Evento> {
        var today = new Date()
        var semanaQueViene = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7, 23, 59, 59, 59)
        return this.usuarioLogueado.todosLosEventos().filter(evento => evento.fechaHoraInicio > semanaQueViene)
    }


    filtrarEventosPorFechas(eventosAFiltrar: Array<Evento>, fechaDesde, fechaHasta) {
        return eventosAFiltrar.filter(evento => (evento.fechaHoraInicio >= fechaDesde) && (evento.fechaHoraInicio <= fechaHasta))
    }

}