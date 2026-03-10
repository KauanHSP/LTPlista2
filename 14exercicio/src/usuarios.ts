export default class usuario {
    nome: string
    email: string

    constructor(nome:string,email:string){
        this.nome = nome
        this.email = email
    }

    validarEmail():void{

        let temAROBA =false
        let temPONTO =false

        for(let i = 0; i<this.email.length;i++){

            const char = this.email[i]

            if(char == "@"){
                temAROBA = true
            }
            if(char == "."){
                temPONTO = true
            }
            //tive que pesquisar bastante para fazer esse
        }
        if(temAROBA == true && temPONTO == true){
            console.log("email valido!")
        }
        else{
            console.log("email invalido")
        }
    }
}