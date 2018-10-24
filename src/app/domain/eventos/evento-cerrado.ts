import Evento from "src/app/domain/eventos/evento"
import Usuario from "../usuarios/usuario";
import EventoAbierto from "./evento-abierto";

export default class EventoCerrado extends Evento {
  totalPersonasInvitadas: number = 0
  totalPersonasConfirmadas: number = 0
  totalPersonasRechazadas: number = 0

  static fromJson(eventoJSON) {
    const result: EventoCerrado = Object.assign(new EventoCerrado(), eventoJSON);
    result.organizador = Usuario.crearUsuario(eventoJSON.nombreOrganizador, eventoJSON.apellidoOrganizador);
    result.fechaHoraInicio = new Date(eventoJSON.fecha);
    return result;
  }
}
