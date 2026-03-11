export default class aluno {
    nome:string
    constructor(nome:string){
        this.nome = nome
    }
    calcularMesdia(nota1:number,nota2:number,nota3:number):number{
        return (nota1+nota2+nota3)/3
    }
}