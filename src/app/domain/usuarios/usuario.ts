import Evento from 'src/app/domain/eventos/evento';
import EventoAbierto from '../eventos/evento-abierto';
import { TipoUsuario } from './tipo-de-usuario';
import { Invitacion } from '../eventos/invitacion';
import EventoCerrado from '../eventos/evento-cerrado';
import { Entrada } from '../eventos/entrada';

export default class Usuario {
  id: number;
  nombre: string;
  apellido: string;
  userName: string;
  tipoDeUsuario: TipoUsuario;
  email: string;
  invitaciones: Array<Invitacion>;
  amigos: Array<Usuario> = [];
  entradas: Array<Entrada> = [];

  constructor(nombre?, apellido?, userName?) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.userName = userName;
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

  comprarEntrada(evento: EventoAbierto) {
    evento.venderEntrada(this);
  }

  pagarEntrada(precio: number) { }

  agregarEntrada(entrada: Entrada) {
    this.entradas.push(entrada);
  }

  invitar(usuarioInvitado: Usuario, invitacion: Invitacion) {
    invitacion.validarInvitado(usuarioInvitado);
    usuarioInvitado.agregarInvitacion(invitacion);
  }

  agregarInvitacion(invitacion: Invitacion) {
    this.invitaciones.push(invitacion);
  }

  aceptarInvitacion(invitacion: Invitacion) {
    invitacion.serAceptada();
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

  // static fromJson(usuarioJSON) {
  //   const result: Usuario = Object.assign(new Usuario(), usuarioJSON);
  //   return result;
  // }

  static crearUsuario(nombre: String, apellido: String): Usuario {
    if (!nombre || !apellido) return null
    return new Usuario(nombre, apellido)
  }

  static fromJSON(usuarioJSON) {
    // id: number;
    // nombre: string;
    // apellido: string;
    // userName: string;
    // tipoDeUsuario: TipoUsuario;
    // email: string;
    // invitaciones: Array<Invitacion>;
    // amigos: Array<Usuario> = [];
    // entradas: Array<Entrada> = [];
    const usuarioCreadoPorJSONRecibido: Usuario = Object.assign(new Usuario(usuarioJSON.nombre, usuarioJSON.apellido, usuarioJSON.userName), usuarioJSON);
    return usuarioCreadoPorJSONRecibido;
  }

  //   /*return new Usuario(usuarioJSON.nombre, usuarioJSON.apellido, usuarioJSON.usuerName)
  // }
}
