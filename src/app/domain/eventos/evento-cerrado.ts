import Evento from "src/app/domain/eventos/evento"
import Usuario from "../usuarios/usuario";
import EventoAbierto from "./evento-abierto";

export default class EventoCerrado extends Evento {
  cantidadInvitados: number = 0
  confirmados: Array<Usuario> = []
  rechazados: Array<Usuario> = []

  static fromJson(eventoJSON) {
    // const tipoEvento: String = Object.assign(String, eventoJSON)
    const result: EventoCerrado = Object.assign(new EventoCerrado(), eventoJSON);
    result.organizador = Usuario.fromJSON(eventoJSON.organizadorEvento);
    result.fechaHoraInicio = new Date(eventoJSON.fecha);
    return result;
  }
}
