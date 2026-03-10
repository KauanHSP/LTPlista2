import ContaBancaria from "./ContasB.ts"

const people1 = new ContaBancaria("mario")

people1.depositar(500)
people1.sacar(200)
console.log(people1.saldo)
people1.sacar(1000)