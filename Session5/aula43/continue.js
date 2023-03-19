/* 
Continue => pode ser utilizado em todos os laços, o continue faz com que continue a execução após
as condições serem executados.
*/
/*
Para saber se um número é par:
10 % 2; Se o restofor 0 o número é par, se o resto for 1 o número é impar.

*/

let numero;

for(let i = 1; i <= 20 ; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(i);
}

