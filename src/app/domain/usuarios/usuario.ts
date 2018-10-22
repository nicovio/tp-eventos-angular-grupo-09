import Evento from 'src/app/domain/eventos/evento';
import EventoAbierto from '../eventos/evento-abierto';
import { TipoUsuario } from './tipo-de-usuario';
import { Invitacion } from '../eventos/invitacion';
import EventoCerrado from '../eventos/evento-cerrado';
import { Entrada } from '../eventos/entrada';

export default class Usuario {
    id: number
    nombre: string
    apellido: string
    username: string
    tipoDeUsuario: TipoUsuario
    email: string
    invitaciones: Array<Invitacion>
    amigos: Array<Usuario> = [];
    entradas: Array<Entrada> = [];
    

    constructor(nombre, apellido, username) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
    }

    todosLosEventos(): Array<Evento>{
        return this.eventosCerrados().concat(this.eventosAbiertos())
    }


    eventosCerrados(): Array<Evento> {
        return this.invitaciones.filter(invitacion => invitacion.aceptada).map(invitacion => invitacion.getEvento())
    }

    invitacionesPendientes(){
        return this.invitaciones.filter(invitacion => invitacion.pendiente)
    }

    eventosAbiertos(): Array<EventoAbierto>{
        return this.entradas.map(entrada => entrada.evento)
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

    agregarEntrada(entrada: Entrada){
        this.entradas.push(entrada)
    }

    invitar(usuarioInvitado: Usuario, invitacion: Invitacion){
        invitacion.validarInvitado(usuarioInvitado)
        usuarioInvitado.agregarInvitacion(invitacion)
    }

    agregarInvitacion(invitacion: Invitacion){
        this.invitaciones.push(invitacion)
    }

    aceptarInvitacion(invitacion: Invitacion){
        invitacion.serAceptada()
    }

    aceptacionMasiva(){
        this.invitaciones.forEach(invitacion => invitacion.serAceptada())
    }

    rechazarInvitacion(invitacion: Invitacion){
        const index = this.invitaciones.indexOf(invitacion, 0);

        if (index > -1) {
            this.invitaciones.splice(index, 1);
        }
    }
}