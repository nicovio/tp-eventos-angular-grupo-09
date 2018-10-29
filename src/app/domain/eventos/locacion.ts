export default class Locacion {

    descripcion: string

    static fromJSON(locacionJSON) {
        const result: Locacion = Object.assign(new Locacion(), locacionJSON);
        return result;
    }
}