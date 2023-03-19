/* 
break = Sair do laço 
*/


let nome = 'Eduardo';
let sobrenome = 'Olimpio';
let idade = 24;
const numeroCliente = 2521;
let valorEmprestimo;
let taxaDeJuros;
let tempoAnos;
let juros;
let montante;


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

/* 
juros = valorEmprestimo * taxaDeJuros * tempoAnos;
montante = valorEmprestimo + juros;
*/

while(true){
    valorEmprestimo = parseInt(prompt("Informe o valor."));
    if(valorEmprestimo === 0){
        break;
    }
    tempoAnos = parseInt(prompt("Insira o número de anos."));
    juros = valorEmprestimo * taxaDeJuros * tempoAnos;
    montante = valorEmprestimo + juros;
    console.log(montante);
};

