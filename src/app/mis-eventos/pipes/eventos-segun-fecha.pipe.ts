import { Pipe, PipeTransform } from '@angular/core';
import Evento from '../../domain/evento';

@Pipe({
  name: 'eventosSegunFechaFilter'
})
export class EventosPorFecha implements PipeTransform {

  transform(eventos: Array<Evento>, criterioDeBusqueda: String): any {
    switch (criterioDeBusqueda) {
      case "Hoy": {
        return this.eventosDeHoy(eventos);
      }
      case "Esta Semana": {
        return this.eventosDeEstaSemana(eventos);
      }
      case "Próximos": {
        return this.eventosProximos(eventos);
      }
    }
  }

  eventosDeHoy(eventos: Array<Evento>) {
    return eventos.filter(evento => this.esHoy(evento));
  }

  eventosDeEstaSemana(eventos: Array<Evento>) {
    return eventos.filter(evento => this.esEstaSemana(evento))
  }

  eventosProximos(eventos: Array<Evento>) {
    return eventos.filter(evento => !this.esHoy(evento) && !this.esEstaSemana(evento))
  }

  esHoy(evento: Evento) {
    var today = new Date()
    return (evento.fechaHoraInicio.getFullYear() === today.getFullYear() && evento.fechaHoraInicio.getMonth() === today.getMonth() && evento.fechaHoraInicio.getDate() === today.getDate())
  }

  esEstaSemana(evento: Evento) {
    var today = new Date()
    var diaDeMañana = today.getDay() + 1
    var i = 1
    while (diaDeMañana <= 7 && diaDeMañana > 1) {
      if (today.getDate() + i === evento.fechaHoraInicio.getDate()) {
        return true;
      }
      diaDeMañana++
      i++
    }
    return false
  }

}
