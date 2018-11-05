import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { REST_SERVER_URL } from './configuration';
import { StubUsuarioService } from './usuario.service';
import Locacion from '../domain/eventos/locacion';

export interface ILocacionService {
  locaciones()
}


@Injectable({
  providedIn: 'root'
})


export class LocacionService implements ILocacionService {

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


export class StubLocacionService implements ILocacionService {

  listaLocaciones: Array<Locacion> = [new Locacion("La Monica bailable"), new Locacion("River Plate"), new Locacion("La bombonera"), new Locacion("UNSAM") ]

  constructor(private usuarioService: StubUsuarioService) {
  }

  async locaciones() {
    return this.listaLocaciones
  }

}
