export default class numero {
    valor:number;
    constructor(valor:number){
        this.valor = valor
    }
    comparar(outrovalor:number){
        if(this.valor>outrovalor){
            console.log('maior')
        }
        else if(this.valor<outrovalor){
            console.log('menor')
        }
        else{
            console.log('igual')
        }
    }
}