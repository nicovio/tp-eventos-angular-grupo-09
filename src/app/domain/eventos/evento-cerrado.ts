import Evento from "src/app/domain/eventos/evento"
import Usuario from "../usuarios/usuario";

export default class EventoCerrado extends Evento {
    cantidadInvitados: number = 0
    confirmados: Array<Usuario> = []
    rechazados: Array<Usuario> = []

}