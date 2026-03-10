export default class tabuada {
    numero: number 
    constructor(numero: number){
        this.numero = numero
    }
    mostrarTabuada(AteAonde:number):void{
        //foi só colocar um numero que determina até onde a tabuada vai e agora ela pode ser infinita!
        for(let i:number =1 ;  i <= AteAonde ; i++ ){
            console.log(`${this.numero} X ${i} = ${this.numero*i}`)
        }
    }
}