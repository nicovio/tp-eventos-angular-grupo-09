import EventoAbierto from '../domain/eventos/evento-abierto';
import { Injectable } from '@angular/core';
import Locacion from "src/app/domain/eventos/locacion";


@Injectable({
  providedIn: 'root'
})
export class EventoService {

  eventoAbierto: EventoAbierto = new EventoAbierto("Racing vs Boca", new Date('2019/3/2 19:00'), new Date('2019/3/2 21:00'), new Locacion("La bombonera"), null, 500)

  constructor() {
    //this.eventoAbierto.locacion =  new Locacion('HolaMundo')
  }

}
