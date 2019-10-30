import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as moment from 'moment';
import Usuario from 'src/app/domain/usuarios/usuario';
import Evento from '../domain/eventos/evento';
import EventoAbierto from '../domain/eventos/evento-abierto';
import EventoCerrado from '../domain/eventos/evento-cerrado';
import { Invitacion } from '../domain/eventos/invitacion';
import Locacion from '../domain/eventos/locacion';
import Profesional from '../domain/usuarios/profesional';
import { getTipoUsuarioInstance } from '../domain/usuarios/tipo-de-usuario';
import { REST_SERVER_URL } from './configuration';

export interface IUsuarioService {
  getUsuarioById(userID?: Number)
  crearEventoAbierto(userID: Number, evento: Evento)
  crearEventoCerrado(userID: Number, evento: Evento)
  getAmigosEnServidor(userID: Number)
  eliminarAmigo(idLogueado: Number, idAEliminar: Number)
  getInvitacionesPendientes(userID: Number)
  aceptarInvitacion(idLogueado: Number, idPorAceptar: Number, cantidadAcompañantes: Number)
  rechazarInvitacion(idLogueado: Number, idPorRechazar: Number)
  getTipoDeUsuario(userID: Number)
  crearEventoAbierto(userID: Number, evento: Evento)
  crearEventoCerrado(userID: Number, evento: Evento)
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IUsuarioService {
  IDUsuarioLogueado: Number


  constructor(private http: Http) {
    const IDKaraDanvers = 0   //SE LO DEBERIA PEDIR AL SERVER POR LOGIN
    this.IDUsuarioLogueado = IDKaraDanvers
  }

  async getUsuarioById(userID: Number) {
    const res = await this.http.get(REST_SERVER_URL + '/usuario/' + userID).toPromise()
    return Usuario.fromJSON(res.json())
  }

  async getAmigosEnServidor(userID: Number) {
    const res = await this.http.get(REST_SERVER_URL + '/usuario/amigos/' + userID).toPromise()
    return res.json().map(Usuario.fromJSON)
  }

  async eliminarAmigo(idLogueado: Number, idAEliminar: Number) {
    const jsonEliminado = JSON.parse('{ "idAEliminar": ' + String(idAEliminar) + ' }');

    return this.http.put(REST_SERVER_URL + "/usuario/amigos/" + idLogueado, jsonEliminado).toPromise()
  }

  async getInvitacionesPendientes(userID: Number) {
    const res = await this.http.get(REST_SERVER_URL + '/usuario/invitaciones/' + userID).toPromise()
    return res.json().map(Invitacion.fromJSON)
  }

  async aceptarInvitacion(idLogueado: Number, idPorAceptar: Number, cantidadAcompañantes: Number) {
    const jsonAceptarInvitacion = JSON.parse('{ "idPorAceptar": ' + String(idPorAceptar) + ', "cantidadAcompañantes": ' + String(cantidadAcompañantes) + ' }');

    return this.http.put(REST_SERVER_URL + "/usuario/invitaciones/aceptar/" + idLogueado, jsonAceptarInvitacion).toPromise()
  }

  async rechazarInvitacion(idLogueado: Number, idPorRechazar: Number) {
    const jsonRechazarInvitacion = JSON.parse('{ "idPorRechazar": ' + String(idPorRechazar) + ' }');

    return this.http.put(REST_SERVER_URL + "/usuario/invitaciones/rechazar/" + idLogueado, jsonRechazarInvitacion).toPromise()
  }

  async getTipoDeUsuario(userID: Number) {
    const res = await this.http.get(REST_SERVER_URL + '/usuario/tipoUsuario/' + userID).toPromise()
    return getTipoUsuarioInstance(res.json())
  }

  async crearEventoAbierto(userID: Number, evento: Evento) {
    const json = JSON.parse(JSON.stringify(evento))
    json.locacion = JSON.parse(JSON.stringify(String(evento.locacion.id)))
    json.fechaHoraInicio = this.formatearFechaJson(evento.fechaHoraInicio.toString())
    json.fechaHoraFin = this.formatearFechaJson(evento.fechaHoraFin.toString())

    return this.http.put(REST_SERVER_URL + '/usuario/eventos/crearAbierto/' + userID, json).toPromise()
  }

  async crearEventoCerrado(userID: Number, evento: Evento) {
    const json = JSON.parse(JSON.stringify(evento))
    json.locacion = JSON.parse(JSON.stringify(String(evento.locacion.id)))
    json.fechaHoraInicio = this.formatearFechaJson(evento.fechaHoraInicio.toString())
    json.fechaHoraFin = this.formatearFechaJson(evento.fechaHoraFin.toString())
    json.fechaMaximaConfirmacion = this.formatearFechaJson(evento.fechaMaximaConfirmacion.toString())

    return this.http.put(REST_SERVER_URL + '/usuario/eventos/crearCerrado/' + userID, json).toPromise()
  }

  formatearFechaJson(fechaAFormatear: string) {
    return moment(fechaAFormatear).format("YYYY/MM/DD HH:mm")
  }

}

@Injectable({
  providedIn: 'root'
})
export class StubUsuarioService implements IUsuarioService {

  IDUsuarioLogueado: Number
  usuarioLogueado: Usuario
  usuarios: Array<Usuario> = []

  constructor() {
    this.IDUsuarioLogueado = 0
    let karaDanvers = new Usuario('Kara','Danvers',0,'@kara95');
    let fernandoDodino = new Usuario('Fernando','Dodino',1,'@dodain');
    let cristianMaggiorano = new Usuario('Cristian','Maggiorano',2,'@crismagg');
    let timothyDrake = new Usuario('Timothy','Drake',3,'@theRedOne')
    let catherineGrant = new Usuario('Catherine','Grant', 4, '@catGrant')
    let perryWhite = new Usuario('Perry', 'White',5,'@whiteDP')
    let jamesGordon = new Usuario('James', 'Gordon',6,'@jimG')
    karaDanvers.tipoUsuario = new Profesional
    karaDanvers.email = 'kara@catco.com';
    karaDanvers.agregarAmigo(timothyDrake);
    karaDanvers.agregarAmigo(catherineGrant);
    karaDanvers.agregarAmigo(perryWhite);
    karaDanvers.agregarAmigo(jamesGordon);
    karaDanvers.agregarAmigo(cristianMaggiorano);
    karaDanvers.agregarAmigo(fernandoDodino);
    let cumpleKara = new EventoCerrado("Cumple Kara", new Date(), new Date('2019/10/19 07:00'), new Locacion("Mi Casa"), cristianMaggiorano)
    let cumpleDodain = new EventoCerrado("Cumple Dodain", new Date('2020/10/11 23:59'), new Date('2020/10/15 22:00'), new Locacion("Lo de Dodino"), fernandoDodino)
    let salidaBoliche = new EventoCerrado("Salida a bailar", new Date('2018/10/19 00:00'), new Date('2010/10/12 06:00'), new Locacion("Soul Train"), cristianMaggiorano)
    let racingBoca = new EventoAbierto("Recital Abel Pintos", new Date('2019/3/2 19:00'), new Date('2019/3/2 21:00'), new Locacion("Luna Park"), fernandoDodino, 500)
    let casamientoMarley = new EventoAbierto("Casamiento Marley", new Date('2018/10/20'), new Date('2020/3/2 21:00'), new Locacion("Uganda"), cristianMaggiorano, 250000)
    let invitacionCumpleKara = new Invitacion(0, cumpleKara, 2)
    let invitacionCumpleDodain = new Invitacion(1, cumpleDodain, 5)
    let invitacionSalidaBoliche = new Invitacion(2, salidaBoliche, 10)
    karaDanvers.invitaciones = [invitacionCumpleKara, invitacionCumpleDodain, invitacionSalidaBoliche]
    karaDanvers.comprarEntrada(racingBoca)
    karaDanvers.comprarEntrada(casamientoMarley)
    this.usuarioLogueado = karaDanvers
    this.agregarUsuario(karaDanvers)
    this.agregarUsuario(fernandoDodino)
    this.agregarUsuario(cristianMaggiorano)
    this.agregarUsuario(timothyDrake)
    this.agregarUsuario(catherineGrant)
    this.agregarUsuario(perryWhite)
    this.agregarUsuario(jamesGordon)
  }

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario)
  }

  searchInvitacionById(idInvitacion: Number) {
    return this.usuarioLogueado.invitaciones.find((invitacion) => invitacion.id === idInvitacion)
  }

  async getUsuarioById(userID: Number){
    return this.usuarios.find((usuario) => usuario.id === userID)
  }

  async getAmigosEnServidor(userID: Number) {
    return this.usuarioLogueado.amigos
  }

  async eliminarAmigo(idLogueado: Number, idAEliminar: Number) {
    const amigoAEliminar = await this.getUsuarioById(idAEliminar)
    const index = this.usuarioLogueado.amigos.indexOf(amigoAEliminar, 0);
    if (index > -1) {
      this.usuarioLogueado.amigos.splice(index, 1);
    }
  }

  async getInvitacionesPendientes(userID: Number) {
    return this.usuarioLogueado.invitaciones
  }

  async aceptarInvitacion(idLogueado: Number, idPorAceptar: Number, cantidadAcompañantes: Number) {
    const invitacion = this.searchInvitacionById(idPorAceptar)
    invitacion.aceptada = true;
  }

  async rechazarInvitacion(idLogueado: Number, idPorRechazar: Number) {
    const invitacionARechazar = this.searchInvitacionById(idPorRechazar)
    const index = this.usuarioLogueado.invitaciones.indexOf(invitacionARechazar, 0);
    if (index > -1) {
      this.usuarioLogueado.invitaciones.splice(index, 1);
    }
  }

  async getTipoDeUsuario(userID: Number) {
    return this.usuarioLogueado.tipoUsuario
  }

  async crearEventoAbierto(userID: Number, evento: Evento) {
    this.usuarioLogueado.eventosPorOrganizar.push(evento)
  }

  async crearEventoCerrado(userID: Number, evento: Evento) {
    this.usuarioLogueado.eventosPorOrganizar.push(evento)
  }

}