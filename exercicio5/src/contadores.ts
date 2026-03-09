export default class contador {
    valor: number = 0

    incrementar():void{
        this.valor += 1
    }
    mostrar(): any {
        console.log(this.valor)
    }
}
    