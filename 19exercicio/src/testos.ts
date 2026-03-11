export default class texto {
    conteudo:string
    constructor(conteudo:string){
        this.conteudo = conteudo
    }
    repetir(vezes:number):void{
        let resultado:String = ""
        for(let i = 1 ; i <= vezes ; i++){
            resultado += this.conteudo + " "
        }
        console.log(resultado)
    }
}