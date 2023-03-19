/* 
FOR: USAMOS O FOR QUANDO SABEMOS A DETERMIANDA QUANTIDADE DE VEZES QUE A AÇÃO DEVE OCORRER.
WHILE: USAMOS QUANDO NÃO SABEMOS A DETERMINADA QUANTIDADE DE VEZES QUE A AÇÃO DEVE OCORRER.
*/
let soma = 0;
let numeroUsuario;
while(soma < 100){
    numeroUsuario = parseInt(prompt("Informe o número."));
    soma += numeroUsuario;
    console.log(soma);
};