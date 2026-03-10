export default class ContaBancaria {
    titular: string;
    saldo: number = 0 

    constructor(titular:string){
        this.titular = titular
    }

    depositar(quantia:number): void {
        this.saldo += quantia
    }
    sacar(quantia:number):void{
        if(quantia>this.saldo){
            console.log("saldo insuficiente para a transação")
        }
        else{
            this.saldo -= quantia
        }
    }
}