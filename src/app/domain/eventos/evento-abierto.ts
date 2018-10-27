import Evento from "src/app/domain/eventos/evento"
import Usuario from "../usuarios/usuario";
import { Entrada } from "./entrada";

export default class EventoAbierto extends Evento {

  precioDeEntrada: number

  constructor(descripcion?, fechaHoraInicio?, fechaHoraFin?, locacion?, organizador?, precioEntrada?: number) {
    super(descripcion, fechaHoraInicio, fechaHoraFin, locacion, organizador)
  }

  venderEntrada(usuario: Usuario) {
      usuario.agregarEntrada(new Entrada(this, this.precioDeEntrada))
  }
}
