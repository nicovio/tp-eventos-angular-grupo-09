
export default class Locacion{
    descripcion: string
    calle: string
    numero: number
    localidad
    provincia: string
    superficie: number

    constructor(descripcion?: string){
        this.descripcion = descripcion
    }

    capacidadMaxima() {
        (this.superficie / 0.8)
    }


}