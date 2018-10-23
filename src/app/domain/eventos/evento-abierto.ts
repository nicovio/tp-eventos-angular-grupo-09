import Evento from "src/app/domain/eventos/evento"
import Usuario from "../usuarios/usuario";
import { Entrada } from "./entrada";

export default class EventoAbierto extends Evento {

  precioDeEntrada: number
  entrada: Entrada


  constructor(descripcion?, fechaHoraInicio?, fechaHoraFin?, locacion?, organizador?, precioEntrada?: number) {
    super(descripcion, fechaHoraInicio, fechaHoraFin, locacion, organizador)
    this.entrada = new Entrada(this, precioEntrada)
  }

  venderEntrada(usuario: Usuario) {
    if (this.quedanEntradas) {
      usuario.pagarEntrada(this.precioDeEntrada)
      usuario.agregarEntrada(this.entrada)
    }
  }

  quedanEntradas() {
    return true
  }

  static fromJson(eventoJSON) {
    const result: EventoAbierto = Object.assign(new EventoAbierto(), eventoJSON);
    result.organizador = Usuario.fromJSON(eventoJSON.organizadorEvento);
    result.fechaHoraInicio = new Date(eventoJSON.fecha);
    return result;
  }


}
