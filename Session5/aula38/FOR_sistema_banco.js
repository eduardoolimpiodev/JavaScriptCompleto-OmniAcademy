
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


for(let cont = 0; cont < 3; cont++){
    valorEmprestimo = parseInt(prompt("Digite o valor do empréstimo"));
    tempoAnos = parseInt(prompt("Digite o número de anos.")); 
    juros = valorEmprestimo * taxaDeJuros * tempoAnos;
    montante = valorEmprestimo + juros;     
    console.log(montante);
}


