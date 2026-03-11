export default class equacao {
    a:number
    b:number
    c:number
    constructor(a:number,b:number,c:number){
        this.a = a
        this.b = b
        this.c = c
    }
    cacularDelta():number{
        return this.b**2 - 4 * this.a * this.c
    }
}