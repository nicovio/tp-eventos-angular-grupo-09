import { TipoUsuario } from "./tipo-de-usuario";

export class Amateur implements TipoUsuario {

    descripcion() {
        return Amateur.name
    }


}