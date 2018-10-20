import EventoAbierto from '../domain/eventos/evento-abierto';
import { Injectable } from '@angular/core';
import Locacion from "src/app/domain/eventos/locacion";
import { Http } from '@angular/http';
import { REST_SERVER_URL } from './configuration';
import Evento from '../domain/eventos/evento';


export interface  IEventoService {

}


@Injectable({
  providedIn: 'root'
})


export class EventoService implements IEventoService {

  constructor(private http: Http) {
  }

  async todasLosEventos() {
    const res = await this.http.get(REST_SERVER_URL + "/eventos").toPromise()
    return res.json().map(Evento.fromJson)
  }


  async getEventoById(id: number) {
    const res = await this.http.get(REST_SERVER_URL + "/eventos/" + id).toPromise()
    return Evento.fromJson(res.json())
  }

  async actualizarEvento(evento: Evento) {
    return this.http.put(REST_SERVER_URL + "/eventos/" + evento.id, evento.toJSON()).toPromise()
  }

}


@Injectable({
  providedIn: 'root'
})


export class MockEventoService implements IEventoService{
  eventoAbierto: EventoAbierto = new EventoAbierto("Racing vs Boca", new Date('2019/3/2 19:00'), new Date('2019/3/2 21:00'), new Locacion("La bombonera"), null, 500)

  constructor() {
    //this.eventoAbierto.locacion =  new Locacion('HolaMundo')
  }

}
