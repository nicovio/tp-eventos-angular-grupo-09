import Usuario from 'src/app/domain/usuarios/usuario';
import Locacion from "./locacion";
import { Body } from '@angular/http/src/body';
import EventoAbierto from './evento-abierto';

export default abstract class Evento {
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


  toJSON(): any {
    const result: any = Object.assign({}, this);
    return result;
  }
}

