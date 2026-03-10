export default class Pessoa {
    nome: string
    horario: number

    constructor(nome:string,horario:number){
        this.nome = nome
        this.horario = horario
    }

    Saudar():void{
        if(6<=this.horario, this.horario<=12){
            console.log(`Bom Dia, ${this.nome}!`)
        }
        else if(12<this.horario, this.horario<18){
            console.log(`Boa Tarde, ${this.nome}!`)
        }
        else{
            console.log(`Boa Noite, ${this.nome}!`)
        }
    }
}