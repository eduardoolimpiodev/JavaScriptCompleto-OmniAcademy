/*
Operadores atiriméticos: 

Adição: + = Soma números, concatenação de strings e/ou soma ou concatenação de booleans.

Subtração : Subtrai dois operandos.

Multiplicação: Possui o produto dos operandos. (*)

Divisão: Possui o cociente entre os dois operandos.

Exponenciação: Retorna o resultrado do primeiro operando elevado ao segundo operando. (**)

Módulo: Retorna o resto da divisão em números inteiros. (%)

Para saber se um número é par:
10 % 2; Se o restofor 0 o número é par, se o resto for 1 o número é impar.

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

console.log("Valor do montante: R$ " + montante);

/* Montante: Valor do empréstimo + juros.

Fórmila de juros simples:
juros = valorEmprestimo * taxaDeJuros * tempoAnos

*/