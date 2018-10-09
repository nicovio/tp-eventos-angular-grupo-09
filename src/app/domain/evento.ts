export default abstract class Evento {
    descripcion;
    fechaHoraInicio : Date
    fechaHoraFin : Date
    locacion;
    organizador;
    id;

    constructor(descripcion, fechaHoraInicio, fechaHoraFin, locacion, organizador) {
        this.descripcion = descripcion
        this.fechaHoraInicio = fechaHoraInicio
        this.fechaHoraFin = fechaHoraFin
        this.locacion = locacion
        this.organizador = organizador
    }
}

