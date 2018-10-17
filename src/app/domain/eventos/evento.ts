import Usuario from 'src/app/domain/usuarios/usuario';
import Locacion from "./locacion";

export default abstract class Evento {
    descripcion: string
    fechaHoraInicio : Date
    fechaHoraFin : Date
    locacion: Locacion
    organizador: Usuario
    id: number 

    constructor(descripcion?, fechaHoraInicio?, fechaHoraFin?, locacion?, organizador?) {
        this.descripcion = descripcion
        this.fechaHoraInicio = fechaHoraInicio
        this.fechaHoraFin = fechaHoraFin
        this.locacion = locacion
        this.organizador = organizador
    }
}

