export default class Locacion {

    descripcion: string
    id: number

    static fromJSON(locacionJSON) {
        const result: Locacion = Object.assign(new Locacion(), locacionJSON);
        return result;
    }
}