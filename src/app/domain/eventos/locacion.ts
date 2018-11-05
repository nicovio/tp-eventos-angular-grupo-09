export default class Locacion {

    descripcion: string
    id: number

    constructor(descripcion?: string){
        this.descripcion = descripcion;
    }

    static fromJSON(locacionJSON) {
        const result: Locacion = Object.assign(new Locacion(), locacionJSON);
        return result;
    }
}