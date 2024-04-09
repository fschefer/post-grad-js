let nome = "Arabella"
console.log(nome)
nome = "Citrino"
console.log (nome)


let salary = 4800
salary += 1000;
console.log (++salary)

teste = 1000
console.log(++teste)
console.log(--teste)
teste -= 100
console.log(teste)

lista_cafes = ["Mocca", "Capuccino", "Chocolate", "Expresso"]
console.log (lista_cafes[0])

const valor = 5;

const resultadoSoma = 5 + valor;
const resultadoSubtracao = 5.99 - valor;

const calculos = [
    resultadoSoma, 
    resultadoSubtracao
];

console.log(calculos[0]);
console.log(calculos[1].toFixed(3));

const somaDosItensDoVetor = calculos[0] + calculos[1];

console.log(`O resultados final é ${somaDosItensDoVetor}`);