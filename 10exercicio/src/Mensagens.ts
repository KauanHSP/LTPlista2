export default class mensageiro {
    remetente: string

    constructor(proprietario:string){
        this.remetente = proprietario
    }
    enviar(destinatario:string, mensagem:string):void{
        console.log(`
            De: ${this.remetente}
            Para: ${destinatario}
            Mensagem: ${mensagem}
        `)
        
    }
}