import { TipoUsuario } from "./tipo-de-usuario";

export class Free implements TipoUsuario {

    descripcion() {
        return Free.name
    }
}