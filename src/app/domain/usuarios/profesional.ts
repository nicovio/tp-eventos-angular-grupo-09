import TipoUsuario from "./tipo-de-usuario";
import Evento from "../eventos/evento";

export default class Profesional implements TipoUsuario {
    descripcion = "Profesional"

    maximoEventosMensuales() {
        return 20
    }

    tieneMaximoEventosMensuales() {
        return true
    }

    tieneMaximoEventosSimultaneos() {
        return false
    }

    puedeHacerEventosAbiertos() {
        return true
    }

    superaMaximoDeEventosSimultaneos(eventoACrear: Evento, eventosOrganizados: Array<Evento>) {
        return this.tieneMaximoEventosSimultaneos()
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