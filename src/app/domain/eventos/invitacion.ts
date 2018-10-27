import EventoCerrado from "./evento-cerrado";
import Usuario from "../usuarios/usuario";
import Evento from "./evento";

export class Invitacion {
    id: Number
    evento: Evento
    cantidadAcompaniantesInvitacion: number
    pendiente: boolean = true
    aceptada: boolean = false

    constructor(evento?: Evento, cantidadAcompaniantes?: number) {
        this.evento = evento
        this.cantidadAcompaniantesInvitacion = cantidadAcompaniantes
    }

    getEvento(): Evento {
        return this.evento
    }

    estaPendiente() {
        return this.pendiente
    }

    rechazar() {
        this.pendiente = false
    }

    serAceptada() {
        this.pendiente = false
        this.aceptada = true
    }

    static fromJSON(invitacionJSON) {
        const result: Invitacion = Object.assign(new Invitacion(), invitacionJSON)
        result.evento = Evento.fromJSON(invitacionJSON.evento)
        return result
    }

}
