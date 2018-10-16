import EventoAbierto from "./evento-abierto";

export class Entrada {
    evento: EventoAbierto
    precio: number

    constructor(evento: EventoAbierto, precio: number)  {
        this.evento = evento
        this.precio = precio
    }


}
