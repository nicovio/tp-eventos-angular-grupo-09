import EventoAbierto from '../domain/eventos/evento-abierto';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { REST_SERVER_URL } from './configuration';
import Evento from '../domain/eventos/evento';
import Usuario from '../domain/usuarios/usuario';
import EventoCerrado from '../domain/eventos/evento-cerrado';
import { StubUsuarioService } from './usuario.service';



export interface IEventoService {
  abiertosOrganizadosPorUsuario(userID: Number)
  cerradosOrganizadosPorUsuario(userID: Number)
  eventosDeHoy(userID: Number)
  eventosDeEstaSemana(userID: Number)
  eventosProximos(userID: Number)
}


@Injectable({
  providedIn: 'root'
})


export class EventoService implements IEventoService {


  constructor(private http: Http) {

  }

  async abiertosOrganizadosPorUsuario(userID: Number) {
    const res = await this.http.get(REST_SERVER_URL + '/eventos/abiertos/' + userID).toPromise()
    return res.json().map(EventoAbierto.fromJSON)
  }

  async cerradosOrganizadosPorUsuario(userID: Number) {
    const res = await this.http.get(REST_SERVER_URL + '/eventos/cerrados/' + userID).toPromise()
    return res.json().map(EventoCerrado.fromJSON)
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
  eventoAbierto: EventoAbierto = new EventoAbierto('Racing vs Boca', new Date('2019/3/2 19:00'), new Date('2019/3/2 21:00'), 'La bombonera', null, 500);
  listaEventos: Array<Evento> = [this.eventoAbierto]
  usuarioLogueado: Usuario

  constructor(private usuarioService: StubUsuarioService) {
    this.usuarioLogueado = usuarioService.usuarioLogueado
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
