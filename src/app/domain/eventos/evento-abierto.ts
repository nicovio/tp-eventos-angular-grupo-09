import Evento from "src/app/domain/eventos/evento"
import Usuario from "../usuarios/usuario";

export default class EventoAbierto extends Evento {

    precioDeEntrada : number

    constructor(descripcion, fechaHoraInicio, fechaHoraFin, locacion, organizador, precioDeEntrada: number){
        super(descripcion, fechaHoraInicio, fechaHoraFin, locacion, organizador)
        this.precioDeEntrada = precioDeEntrada
    }

    venderEntrada(usuario: Usuario){
        if (this.quedanEntradas){
            usuario.pagarEntrada(this.precioDeEntrada)
            usuario.agregarEventoAbierto(this)
        }
    }

    quedanEntradas(){
       return true
    }

}