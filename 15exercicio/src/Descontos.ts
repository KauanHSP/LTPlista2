export default class produto {
    nome: string;
    preco: number;
    constructor(nome:string,preco:number){
        this.nome = nome
        this.preco = preco
    }
    aplicarDesconto(percentual:number){
        this.preco -= this.preco * percentual/100
    }
}