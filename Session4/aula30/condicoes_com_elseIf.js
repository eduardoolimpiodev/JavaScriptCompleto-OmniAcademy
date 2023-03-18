// ELSE IF - Taxa de juros por idade
/* 
18^25 anos: 9%
26^35 anos: 8%
36^50 anos: 7%
51 anos ou mais: 6%
*/

let nome = 'Eduardo';
let sobrenome = 'Olimpio';
let idade = 65;
const numeroCliente = 2521;
let valorEmprestimo = 150000;
let taxaDeJuros = 0.1;
let bomPagador = true;
let tempoAnos = 6;
let juros = valorEmprestimo * taxaDeJuros * tempoAnos;
let montante = valorEmprestimo + juros;

if(idade >= 18 && idade <= 25) {
    taxaDeJuros = 0.09;
} else if(idade >= 26 && idade <= 35) {
    taxaDeJuros = 0.08
} else if(idade >= 36 && idade <= 50){
    taxaDeJuros = 0.07;
} else{
    taxaDeJuros = 0.06
};

console.log(taxaDeJuros);