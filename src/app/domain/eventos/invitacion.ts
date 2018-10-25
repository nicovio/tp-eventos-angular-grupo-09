import EventoCerrado from "./evento-cerrado";
import Usuario from "../usuarios/usuario";
import Evento from "./evento";

export class Invitacion {
    id: Number
    evento: EventoCerrado
    cantidadAcompaniantesInvitacion: number
    pendiente: boolean = true
    aceptada: boolean = false

    constructor(evento?: EventoCerrado, cantidadAcompaniantes?: number) {
        this.evento = evento
        this.cantidadAcompaniantesInvitacion = cantidadAcompaniantes
    }

    getEvento(): EventoCerrado {
        return this.evento
    }

    estaPendiente() {
        return this.pendiente
    }

    rechazar() {
        this.pendiente = false
    }

    validarInvitado(invitado: Usuario) {
        return true;
    }

    serAceptada() {
        this.pendiente = false
        this.aceptada = true
    }

    static fromJSON(invitacionJSON) {
        const result: Invitacion = Object.assign(new Invitacion(), invitacionJSON)
        result.evento = EventoCerrado.fromJSON(invitacionJSON.evento)
        return result
    }

}
