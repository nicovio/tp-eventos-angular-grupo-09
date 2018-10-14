import Evento from 'src/app/domain/eventos/evento';
import EventoAbierto from '../eventos/evento-abierto';
import { TipoUsuario } from './tipo-de-usuario';
import { Invitacion } from '../eventos/invitacion';
import EventoCerrado from '../eventos/evento-cerrado';

export default class Usuario {
    nombre: string
    apellido: string
    username: string
    tipoDeUsuario: TipoUsuario
    email: string
    public invitaciones: Array<Invitacion>
    public amigos: Array<Usuario> = [];
    public eventosAbiertos: Array<EventoAbierto> = [];
    // public eventos: Array<Evento> = [];

    constructor(nombre, apellido, username) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
    }

    todosLosEventos(): Array<Evento>{
        return this.eventosCerrados().concat(this.eventosAbiertos)
    }


    eventosCerrados(): Array<Evento> {
        return this.invitaciones.filter(invitacion => invitacion.aceptada).map(invitacion => invitacion.getEvento())
    }

    invitacionesPendientes(){
        this.invitaciones.filter(invitacion => invitacion.pendiente)
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

    comprarEntrada(evento: EventoAbierto){
        evento.venderEntrada(this)
    }

    pagarEntrada(precio: number){

    }

    agregarEventoAbierto(evento: EventoAbierto){
        this.eventosAbiertos.push(evento)
    }

    invitar(usuarioInvitado: Usuario, invitacion: Invitacion){
        invitacion.validarInvitado(usuarioInvitado)
        usuarioInvitado.agregarInvitacion(invitacion)
    }

    agregarInvitacion(invitacion: Invitacion){
        this.invitaciones.push(invitacion)
    }

    aceptarInvitacion(invitacion: Invitacion){
        invitacion.serAceptada(this)
    }

    aceptacionMasiva(){
        this.invitaciones.forEach(invitacion => invitacion.serAceptada(this))
    }

}