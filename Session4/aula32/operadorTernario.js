/* 

Operadores ternários.
(condicao) ? operando1 : operando2;

*/
let bomPagador = true;
let nome = 'Eduardo';

if(bomPagador) {
    console.log("O cliente "+ nome + " é um bom pagador!");
} else {
    console.log("O cliente "+ nome + " não é um bom pagador!");
}

//Com operador ternário:

console.log("O cliente " + nome + (bomPagador ? " é bom pagador." : " não é bom pagador."));

console.log(bomPagador ? "O cliente "+ nome + " é um bom pagador!" : "O cliente "+ nome + " não é um bom pagador!");

