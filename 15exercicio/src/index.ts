import produto from "./Descontos.ts";

const p1 = new produto("tenis", 100 )

p1.aplicarDesconto(20)
console.log(p1.preco)