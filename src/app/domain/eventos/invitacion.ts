import EventoCerrado from "./evento-cerrado";
import Usuario from "../usuarios/usuario";
import Evento from "./evento";

export class Invitacion {
    id: number
    evento: Evento
    cantidadAcompaniantesInvitacion: number
    pendiente: boolean = true
    aceptada: boolean = false

    constructor(id?: number, evento?: Evento, cantidadAcompaniantes?: number) {
        this.id = id
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
