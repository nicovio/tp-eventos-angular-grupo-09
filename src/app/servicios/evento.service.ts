import EventoAbierto from '../domain/eventos/evento-abierto';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { REST_SERVER_URL } from './configuration';
import Evento from '../domain/eventos/evento';
import Usuario from '../domain/usuarios/usuario';
import EventoCerrado from '../domain/eventos/evento-cerrado';
import { StubUsuarioService } from './usuario.service';

export interface IEventoService {
  eventosDeHoy(userID: Number)
  eventosDeEstaSemana(userID: Number)
  eventosProximos(userID: Number)
}

@Injectable({
  providedIn: 'root'
})


export class EventoService implements IEventoService {

  eventosAbiertosOrganizados: Evento[] = []
  eventosCerradosOrganizados: Evento[] = []

  constructor(private http: Http) { }

  nuevoEventoAbierto(evento: Evento) {
    this.eventosAbiertosOrganizados.push(evento)
  }

  nuevoEventoCerrado(evento: Evento) {
    this.eventosCerradosOrganizados.push(evento)
  }

  async fetchAbiertosOrganizadosPorUsuario(userID: Number) {
    const res = await this.http.get(REST_SERVER_URL + '/eventos/abiertos/' + userID).toPromise()
    this.eventosAbiertosOrganizados = res.json().map(EventoAbierto.fromJSON)
  }

  async fetchCerradosOrganizadosPorUsuario(userID: Number) {
    const res = await this.http.get(REST_SERVER_URL + '/eventos/cerrados/' + userID).toPromise()
    this.eventosCerradosOrganizados = res.json().map(EventoAbierto.fromJSON)
  }

  async eventosDeHoy(userID: Number) {
    const res = await this.http.get(REST_SERVER_URL + '/eventos/hoy/' + userID).toPromise()
    return res.json().map(Evento.fromJSON)
  }

  async eventosDeEstaSemana(userID: Number) {
    const res = await this.http.get(REST_SERVER_URL + '/eventos/estaSemana/' + userID).toPromise()
    return res.json().map(Evento.fromJSON)
  }

  async eventosProximos(userID: Number) {
    const res = await this.http.get(REST_SERVER_URL + '/eventos/proximos/' + userID).toPromise()
    return res.json().map(Evento.fromJSON)
  }

}

@Injectable({
  providedIn: 'root'
})

export class StubEventoService implements IEventoService {
  listaEventos: Array<Evento> = []
  usuarioLogueado: Usuario

  constructor(private usuarioService: StubUsuarioService) {
    this.usuarioLogueado = usuarioService.usuarioLogueado
    const eventoAbierto: EventoAbierto = new EventoAbierto('Racing vs Boca', new Date('2019/3/2 19:00'), new Date('2019/3/2 21:00'), 'La bombonera', this.usuarioLogueado, 500);
    this.listaEventos.push(eventoAbierto)
  }

  organizadosPorUsuario() {
    return this.listaEventos.filter(evento => evento.organizador === this.usuarioLogueado)
  }

  cerradosOrganizadosPorUsuario() {
    return this.organizadosPorUsuario().filter(evento => evento.constructor.name === EventoCerrado.name)
  }

  abiertosOrganizadosPorUsuario() {
    return this.organizadosPorUsuario().filter(evento => evento.constructor.name === EventoAbierto.name)
  }

  eventosDeHoy() {
    var principioDelDia = new Date()
    var finalDelDia = new Date()
    principioDelDia.setHours(0, 0, 0, 0)
    finalDelDia.setHours(23, 59, 59, 59)
    return this.filtrarEventosPorFechas(this.usuarioLogueado.todosLosEventos(), principioDelDia, finalDelDia);
  }

  eventosDeEstaSemana(): Array<Evento> {
    var today = new Date()
    var mañana = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 0, 0, 0, 0)
    var semanaQueViene = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7, 23, 59, 59, 59)

    return this.filtrarEventosPorFechas(this.usuarioLogueado.todosLosEventos(), mañana, semanaQueViene);
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
