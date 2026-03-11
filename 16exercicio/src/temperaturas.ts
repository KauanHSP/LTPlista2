export default class temperatura {
    celsius: number
    constructor(celsius:number){
        this.celsius = celsius
    }
    converterParaFahrenheit():number{
        return (this.celsius * 1.8) + 32
    }
    converterParaKelvin():number{
        return this.celsius + 273
    }
}