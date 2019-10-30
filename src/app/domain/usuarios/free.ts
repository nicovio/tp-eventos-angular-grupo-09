import TipoUsuario from "./tipo-de-usuario";
import Evento from "../eventos/evento";

export default class Free implements TipoUsuario {
    descripcion = "Free"

    maximoEventosMensuales() {
        return 3
    }

    maximoEventosSimultaneos() {
        return 10
    }

    tieneMaximoEventosMensuales() {
        return true
    }

    tieneMaximoEventosSimultaneos() {
        return true
    }

    puedeHacerEventosAbiertos() {
        return false
    }

    superaMaximoDeEventosSimultaneos(eventoACrear: Evento, eventosOrganizados: Array<Evento>) {
        if (this.tieneMaximoEventosSimultaneos()) {
            return (this.maximoEventosSimultaneos() < this.cantidadEventosConLosQueEsSimultaneo(eventoACrear, eventosOrganizados))
        } else {
            return false
        }
    }

    cantidadEventosConLosQueEsSimultaneo(evento: Evento, eventosPorOrganizar: Array<Evento>) {
        return eventosPorOrganizar.filter(eventoAEvaluar => this.determinarSonSimultaneos(evento, eventoAEvaluar)).length + 1  //se suma uno porque siempre va a ser simultaneo con si mismo
    }

    determinarSonSimultaneos(eventoACrear: Evento, eventoOrganizado: Evento) {
        return eventoACrear.fechaHoraInicio <= eventoOrganizado.fechaHoraFin &&
            eventoACrear.fechaHoraInicio >= eventoOrganizado.fechaHoraInicio
    }

    superaMaximoDeEventosMensuales(eventoACrear: Evento, eventosOrganizados: Array<Evento>) {
        if (this.tieneMaximoEventosMensuales()) {
            const mes = eventoACrear.fechaHoraInicio.getMonth()
            const año = eventoACrear.fechaHoraInicio.getFullYear()
            return this.maximoEventosMensuales() < this.cantidadEventosDelMes(año, mes, eventosOrganizados) + 1
        }
    }

    cantidadEventosDelMes(año: number, mes: number, eventosOrganizados: Array<Evento>) {
        return eventosOrganizados.filter(evento => evento.fechaHoraInicio.getMonth() === mes && evento.fechaHoraInicio.getFullYear() === año).length
    }

}