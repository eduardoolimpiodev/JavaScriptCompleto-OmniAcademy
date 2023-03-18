/*  
Operadores Lógicos:
Não(!)
Ou (||)
E(&&)

ORDEM DE PRECEDÊNCIA: ! && || 
*/

let cpfValido = true;
console.log(!cpfValido);

let senhaValida = false;
console.log(!senhaValida);

console.log(!undefined);
console.log(!null);
console.log(!10);
console.log(!0);
console.log(!"");
console.log(!"Ok");


/*
TABELA DA VERDADE: &&

A         B    A && B
true    true    true
true    false   false
false   true    false
false   false   false

*/
/*
TABELA DA VERDADE: ||

A         B    A || B
true    true    true
true    false   true
false   true    true
false   false   false

*/
