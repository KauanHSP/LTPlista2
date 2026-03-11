export default class intervalo {
    inicio:number
    final:number

    constructor(inicio:number,final:number){
        this.inicio = inicio
        this.final = final
    }

    contem(numero:number):string{
        let YesNot = false
        for(let i:number = this.inicio ; i <= this.final ; i++){
            if(numero == i){
                YesNot = true
                break
            }
        }
        return `${numero} esta no intevalo: ${YesNot}`
       
    }
}