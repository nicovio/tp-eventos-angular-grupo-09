import Evento from 'src/app/domain/eventos/evento';
import EventoAbierto from '../eventos/evento-abierto';
import { Invitacion } from '../eventos/invitacion';
import { Entrada } from '../eventos/entrada';
import TipoUsuario, { getTipoUsuarioInstance } from './tipo-de-usuario';

export default class Usuario {
  id: number;
  nombre: string;
  apellido: string;
  userName: string;
  tipoUsuario: TipoUsuario;
  email: string;
  invitaciones: Array<Invitacion>;
  amigos: Array<Usuario> = [];
  entradas: Array<Entrada> = [];
  cantidadAmigos: string

  constructor(nombre?, apellido?, userName?, email?) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.userName = userName;
    this.email = email;
  }

  todosLosEventos(): Array<Evento> {
    return this.eventosCerrados().concat(this.eventosAbiertos());
  }

  eventosCerrados(): Array<Evento> {
    return this.invitaciones
      .filter(invitacion => invitacion.aceptada)
      .map(invitacion => invitacion.getEvento());
  }

  invitacionesPendientes() {
    return this.invitaciones.filter(invitacion => invitacion.pendiente);
  }

  eventosAbiertos(): Array<EventoAbierto> {
    return this.entradas.map(entrada => entrada.evento);
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


  agregarEntrada(entrada: Entrada) {
    this.entradas.push(entrada);
  }

  comprarEntrada(evento: EventoAbierto) {
    evento.venderEntrada(this);
  }

  agregarInvitacion(invitacion: Invitacion) {
    this.invitaciones.push(invitacion);
  }


  aceptacionMasiva() {
    this.invitaciones.forEach(invitacion => invitacion.serAceptada());
  }

  rechazarInvitacion(invitacion: Invitacion) {
    const index = this.invitaciones.indexOf(invitacion, 0);

    if (index > -1) {
      this.invitaciones.splice(index, 1);
    }
  }

  toJSON(): any {
    const result: any = Object.assign({}, this);
    return result;
  }

  static crearUsuario(nombre: String, apellido: String): Usuario {
    if (!nombre || !apellido) return null
    return new Usuario(nombre, apellido)
  }

  static fromJSON(usuarioJSON) {
    const result: Usuario = Object.assign(new Usuario(), usuarioJSON);
    result.tipoUsuario = getTipoUsuarioInstance(usuarioJSON.tipoUsuario)
    return result
  }
}
