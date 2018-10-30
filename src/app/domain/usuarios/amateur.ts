import TipoUsuario from "./tipo-de-usuario";
import Evento from "../eventos/evento";

export default class Amateur implements TipoUsuario {
    descripcion = "Amateur"

    tieneMaximoEventosMensuales() {
        return false
    }

    tieneMaximoEventosSimultaneos() {
        return true
    }

    maximoEventosSimultaneos() {
        return 5
    }

    puedeHacerEventosAbiertos(): boolean {
        return true
    }


    superaMaximoDeEventosSimultaneos(eventoACrear: Evento, eventosOrganizados: Array<Evento>) {
        if (this.tieneMaximoEventosSimultaneos()) {
            return (this.maximoEventosSimultaneos() < this.cantidadEventosConLosQueEsSimultaneo(eventoACrear, eventosOrganizados))
        } else {
            return false
        }
    }

    cantidadEventosConLosQueEsSimultaneo(eventoACrear: Evento, eventosPorOrganizar: Array<Evento>) {
        return eventosPorOrganizar.filter(eventoAEvaluar => this.determinarSonSimultaneos(eventoACrear, eventoAEvaluar)).length + 1  //se suma uno porque siempre va a ser simultaneo con si mismo
    }

    determinarSonSimultaneos(eventoACrear: Evento, eventoOrganizado: Evento) {
        return eventoACrear.fechaHoraInicio <= eventoOrganizado.fechaHoraFin &&
            eventoACrear.fechaHoraInicio >= eventoOrganizado.fechaHoraInicio
    }

    superaMaximoDeEventosMensuales(eventoACrear: Evento, eventosOrganizados: Array<Evento>) {
        return this.tieneMaximoEventosMensuales()
    }
}