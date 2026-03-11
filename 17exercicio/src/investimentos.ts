export default class investimento {
    capital:number
    taxa:number
    constructor(capital:number,taxa:number){
        this.capital = capital
        this.taxa = taxa
    }
    calcularJuros(anos:number):string{
        return `Juros em ${anos} anos: ${this.capital * this.taxa * anos}`
    }
}