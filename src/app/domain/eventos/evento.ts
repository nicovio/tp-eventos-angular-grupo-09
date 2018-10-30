import Usuario from 'src/app/domain/usuarios/usuario';
import * as moment from 'moment';
import Locacion from './locacion';


export default class Evento {
  descripcion: string
  fechaHoraInicio: Date
  fechaHoraFin: Date
  locacion: Locacion
  organizador: Usuario
  fechaMaximaConfirmacion: Date
  id: number

  constructor(descripcion?, fechaHoraInicio?, fechaHoraFin?, locacion?, organizador?, fechaMaximaConfirmacion?) {
    this.descripcion = descripcion
    this.fechaHoraInicio = fechaHoraInicio
    this.fechaHoraFin = fechaHoraFin
    this.locacion = locacion
    this.organizador = organizador
    this.fechaMaximaConfirmacion = fechaMaximaConfirmacion
  }

  static fromJSON(eventoJSON) {
    const result: Evento = Object.assign(new Evento(), eventoJSON);
    result.organizador = Usuario.crearUsuario(eventoJSON.nombreOrganizador, eventoJSON.apellidoOrganizador);
    result.fechaHoraInicio = new Date(eventoJSON.fechaHoraInicio);
    result.fechaHoraFin = new Date(eventoJSON.fechaHoraFin);
    result.fechaMaximaConfirmacion = new Date(eventoJSON.fechaMaximaConfirmacion);
    result.locacion = Locacion.fromJSON(eventoJSON.locacion)
    return result;
  }
}

