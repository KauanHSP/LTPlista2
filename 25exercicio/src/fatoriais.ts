export default class fatorial{
    numero:number
    constructor(numero:number){
    this.numero = numero
    }
    calcular(){
        let final = 1
        for(let i = 2 ; i <= this.numero ; i++){
            final = final * i
        }
        console.log(final)
    }
}