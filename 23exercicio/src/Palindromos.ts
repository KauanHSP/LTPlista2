export default class palindromo {
    palavra:string
    constructor(palavra:string){
        this.palavra = palavra
    }

    ehPalindromo():boolean | void{
        let trasfrente = this.palavra[this.palavra.length-1]
        
        for(let i = this.palavra.length -  2 ; i >= 0 ; i--){
            trasfrente += this.palavra[i]
        }
        if(trasfrente == this.palavra){
            return true
        }
        else{
            return false
        }
        
    }
}