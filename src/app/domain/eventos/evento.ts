import Usuario from 'src/app/domain/usuarios/usuario';
import * as moment from 'moment';


export default class Evento {
  descripcion: string
  fechaHoraInicio: Date
  fechaHoraFin: Date
  locacion: string
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


  toJSON(): any {
    const result: any = Object.assign({}, this);
    result.fechaHoraInicio = moment().format("YYYY/MM/DD HH:mm")
    result.fechaHoraFin = moment().format("YYYY/MM/DD HH:mm")
    if (this.fechaMaximaConfirmacion) {
    result.fechaMaximaConfirmacion = moment().format("YYYY/MM/DD HH:mm")
    }
    return result;
  }

  static fromJSON(eventoJSON) {
    const result: Evento = Object.assign(new Evento(), eventoJSON);
    result.organizador = Usuario.crearUsuario(eventoJSON.nombreOrganizador, eventoJSON.apellidoOrganizador);
    result.fechaHoraInicio = new Date(eventoJSON.fecha);
    return result;
  }
}

