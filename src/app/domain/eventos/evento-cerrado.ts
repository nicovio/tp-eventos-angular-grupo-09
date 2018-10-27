import Evento from "src/app/domain/eventos/evento"
import Usuario from "../usuarios/usuario";
import { Invitacion } from "./invitacion";

export default class EventoCerrado extends Evento {
  totalPersonasInvitadas: number = 0
  totalPersonasConfirmadas: number = 0
  totalPersonasRechazadas: number = 0
}