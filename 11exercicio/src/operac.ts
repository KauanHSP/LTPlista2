export default class operacoes {
    calcular(a:number,b:number,operacao:string){
        if(operacao == "somar"){
            console.log(`${a} + ${b} = ${a+b}`)
        }
        else if(operacao == "subtrair"){
            console.log(`${a} - ${b} = ${a-b}`)
        }
        else if(operacao == "dividir"){
            console.log(`${a} / ${b} = ${a/b}`)
        }
        else if(operacao == "multiplicar"){
            console.log(`${a} * ${b} = ${a*b}`)
        }
    }
}