import Evento from "src/app/domain/eventos/evento"

export default class EventoCerrado extends Evento {
  totalPersonasInvitadas: number = 0
  totalPersonasConfirmadas: number = 0
  totalPersonasRechazadas: number = 0
}