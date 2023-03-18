/* 
If Else:
If(Se) - Else(Se não)
*/

let nome = 'Eduardo';
let sobrenome = 'Olimpio';
let idade = 36;
const numeroCliente = 2521;
let valorEmprestimo = 150000;
let taxaDeJuros = 0.1;
let bomPagador = true;
let tempoAnos = 6;
let juros = valorEmprestimo * taxaDeJuros * tempoAnos;
let montante = valorEmprestimo + juros;

// console.log("Valor do montante: R$ " + montante);


let totalCompra = 350;
let freteGratis = 350;
let faltaParaFreteGratis = freteGratis - totalCompra;

if(totalCompra >= freteGratis) {
    console.log("Você ganhou Frete Grátis!");
} else {
    console.log(`Compre mais ${faltaParaFreteGratis} reais para ganhar o frete grátis!`);
};

if(bomPagador) {
    console.log("O cliente "+ nome + " é um bom pagador!");
} else {
    console.log("O cliente "+ nome + " não é um bom pagador!");
}
