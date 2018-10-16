import EventoCerrado from "./evento-cerrado";
import Usuario from "../usuarios/usuario";

export class Invitacion {
    evento: EventoCerrado
    cantidadAcompaniantes: number
    pendiente: boolean = true
    aceptada: boolean = false

    constructor(evento: EventoCerrado, cantidadAcompaniantes: number) {
        this.evento = evento
        this.cantidadAcompaniantes = cantidadAcompaniantes
    }

    getEvento(): EventoCerrado {
        return this.evento
    }

    estaPendiente() {
        return this.pendiente
    }

    rechazar() {
        this.pendiente = false
        // evento.rechazarInvitacion(usuario, this)
    }

    //     aceptar(usuario: Usuario, cantidadAcompañantes: number) throws Exception{
    //     try {
    //         verificaAcompañantesDeclarados(cantidadAcompañantes, cantidadAcompañantesInvitacion)
    //         pendiente = false
    //         aceptada = true
    //         evento.confirmarInvitacion(usuario, cantidadAcompañantes)
    //     }
    //     catch (ExceptionSuperaCantidadAcompaniantesPermitidos e) {
    //         throw new Exception("La cantidad acompañiantes declarados supera la permitida por la invitacion")
    //     }
    // 		catch (ExceptionExcedidaLaFechaDeConfirmacion e) {
    //         throw new Exception("No se puede aceptar la invitacion al evento " + evento.descripcion +
    //             " debido a que ya ha pasado la fecha limite de confirmacion")
    //     }
    // }

    verificaAcompañantesDeclarados(cantidadAcompañantes: number, cantidadAcompañantesInvitacion: number) {
        // if (cantidadAcompañantes > cantidadAcompañantesInvitacion)
        //     throw new ExceptionSuperaCantidadAcompaniantesPermitidos
    }

    validaFechaEsAntesDeFechaLimite(invitacion: Invitacion) {
        // if (!invitacion.evento.noSeAlcanzoFechaLimite)
        //     throw new ExceptionExcedidaLaFechaDeConfirmacion
    }

    validarInvitado(invitado: Usuario) {
        return true;
    }

    serAceptada() {
        this.pendiente = false
        this.aceptada = true
    }

}
