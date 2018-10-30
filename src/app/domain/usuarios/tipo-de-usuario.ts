import Amateur from "./amateur";
import Profesional from "./profesional";
import Free from "./free";
import Evento from "../eventos/evento";

export function getTipoUsuarioInstance(jsonTipo) {
    switch (jsonTipo) {
        case "Free": {
            return new Free
        }
        case "Amateur": {
            return new Amateur
        }
        case "Profesional": {
            return new Profesional
        }
    }
}

export default interface TipoUsuario {

    superaMaximoDeEventosSimultaneos(eventoACrear: Evento, eventosOrganizados: Array<Evento>): boolean
    superaMaximoDeEventosMensuales(eventoACrear: Evento, eventosOrganizados: Array<Evento>): boolean
    puedeHacerEventosAbiertos(): boolean

}

