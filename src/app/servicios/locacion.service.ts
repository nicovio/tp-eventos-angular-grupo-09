import EventoAbierto from '../domain/eventos/evento-abierto';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { REST_SERVER_URL } from './configuration';
import Evento from '../domain/eventos/evento';
import Usuario from '../domain/usuarios/usuario';
import EventoCerrado from '../domain/eventos/evento-cerrado';
import { MockUsuarioService } from './usuario.service';
import * as moment from 'moment';
import Locacion from '../domain/eventos/locacion';

export interface ILocacionService {
}


@Injectable({
  providedIn: 'root'
})


export class LocacionService implements LocacionService {

  constructor(private http: Http) {

  }

  async locaciones() {
    const res = await this.http.get(REST_SERVER_URL + '/locaciones/').toPromise()
    return res.json().map(Locacion.fromJSON)
  }

}


@Injectable({
  providedIn: 'root'
})


export class MockLocacionService implements ILocacionService {

  constructor(private usuarioService: MockUsuarioService) {
  }

}
