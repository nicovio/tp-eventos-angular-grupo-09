import { TipoUsuario } from "./tipo-de-usuario";

export class Profesional implements TipoUsuario{

    descripcion() {
        return Profesional.name
    }


}