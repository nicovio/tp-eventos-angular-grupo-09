import EventoAbierto from '../domain/eventos/evento-abierto';
import { Injectable } from '@angular/core';
import Locacion from "src/app/domain/eventos/locacion";
import EventoCerrado from '../domain/eventos/evento-cerrado';


@Injectable({
  providedIn: 'root'
})
export class EventoService {
  locacion: Locacion 

  eventoAbierto: EventoAbierto = new EventoAbierto("Racing vs Boca", new Date('2019/3/2 19:00'), new Date('2019/3/2 21:00'), new Locacion("La bombonera"), null, 500)
  eventoCerrado: EventoCerrado = new EventoCerrado("Cumple Nico", new Date('2019/3/2 19:00'), new Date('2019/3/2 21:00'), new Locacion("UNSAM"), null)

  constructor() {
    this.locacion = new Locacion("La bombonera")

  }

}
