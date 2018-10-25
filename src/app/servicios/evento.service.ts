import EventoAbierto from '../domain/eventos/evento-abierto';
import { Injectable } from '@angular/core';
import Locacion from "src/app/domain/eventos/locacion";
import { Http } from '@angular/http';
import { REST_SERVER_URL } from './configuration';
import Evento from '../domain/eventos/evento';
import Usuario from '../domain/usuarios/usuario';
import EventoCerrado from '../domain/eventos/evento-cerrado';


export interface IEventoService {
  crearEvento(evento: Evento)
}


@Injectable({
  providedIn: 'root'
})


export class EventoService implements IEventoService {
  

  crearEvento(evento: Evento) {
    //ESTO LO MANDA AL SERVER CON UN POST
  }

  constructor(private http: Http) {
  }

  async abiertosOrganizadosPorUsuario(userID: Number) {
    const res = await this.http.get(REST_SERVER_URL + '/eventos/abiertos/' + userID).toPromise()
    return res.json().map(EventoAbierto.fromJson)
  }

  async cerradosOrganizadosPorUsuario(userID: Number) {
    const res = await this.http.get(REST_SERVER_URL + '/eventos/cerrados/' + userID).toPromise()
    return res.json().map(EventoCerrado.fromJSON)
  }

  async actualizarEvento(evento: Evento) {
    return this.http.put(REST_SERVER_URL + "/eventos/" + evento.id, evento.toJSON()).toPromise()
  }
  
}


@Injectable({
  providedIn: 'root'
})


export class MockEventoService implements IEventoService {
  eventoAbierto: EventoAbierto = new EventoAbierto('Racing vs Boca', new Date('2019/3/2 19:00'), new Date('2019/3/2 21:00'), new Locacion('La bombonera'), null, 500);

  listaEventos: Array<Evento> = [this.eventoAbierto]

  crearEvento(evento: Evento) {
    this.listaEventos.push(evento)
  }

  constructor() {
    // this.eventoAbierto.locacion =  new Locacion('HolaMundo')
  }

  organizadosPorUsuario(usuario: Usuario) {
    return this.listaEventos.filter(evento => evento.organizador === usuario)
  }

  eventosOrganizadosCerrados(usuario: Usuario) {
    return this.organizadosPorUsuario(usuario).filter(evento => evento.constructor.name === EventoCerrado.name)
  }

  eventosOrganizadosAbiertos(usuario: Usuario) {
    return this.organizadosPorUsuario(usuario).filter(evento => evento.constructor.name === EventoAbierto.name)
  }
  // organizadosPorUsuario(ACA VA ID DE USUARIO){

  // }


  eventosDeHoy(usuario: Usuario): Array<Evento> {
    var principioDelDia = new Date()
    var finalDelDia = new Date()
    principioDelDia.setHours(0, 0, 0, 0)
    finalDelDia.setHours(23, 59, 59, 59)
    return this.filtrarEventosPorFechas(usuario.todosLosEventos(), principioDelDia, finalDelDia);
  }

  eventosDeEstaSemana(usuario: Usuario): Array<Evento> {
    var today = new Date()
    var mañana = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 0, 0, 0, 0)
    var semanaQueViene = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7, 23, 59, 59, 59)

    return this.filtrarEventosPorFechas(usuario.todosLosEventos(), mañana, semanaQueViene);
  }

  eventosProximos(usuario: Usuario): Array<Evento> {
    var today = new Date()
    var semanaQueViene = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7, 23, 59, 59, 59)
    return usuario.todosLosEventos().filter(evento => evento.fechaHoraInicio > semanaQueViene)
  }


  filtrarEventosPorFechas(eventosAFiltrar: Array<Evento>, fechaDesde, fechaHasta) {
    return eventosAFiltrar.filter(evento => (evento.fechaHoraInicio >= fechaDesde) && (evento.fechaHoraInicio <= fechaHasta))
  }

}
